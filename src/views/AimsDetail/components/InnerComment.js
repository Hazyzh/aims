import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Button, Form, Spin, message, Divider } from 'antd'
import { get_aimCommentList } from '@/actions/aimDetail_action.js'
import { getTimeInfo } from './DetailTitle.js'

const FormItem = Form.Item
const { TextArea } = Input

// 循环渲染子组件
const InnerItem = ({info}) =>
  <Col offset={2} span={22} className='inner-item'>
    <div className='box'>
      <span className='text'>{info.comment_content}</span>
      <span className='user'><a>{info.aimUser.user_name}</a></span>
      <span className='time'>{getTimeInfo(info.createdAt)}</span>
    </div>
    <Divider dashed className='inner-line' />
  </Col>

class InnerComment extends Component {
  state = {
    loading: false,
    fetching: false,
    innerLists: []
  }
  componentWillMount () {
    this._fetchData()
  }
  _fetchData = () => {
    const info = this.props.info
    this.setState({fetching: true})
    const params = { pid: info.id, aimId: info.aim_id, pageSize: 100 }
    get_aimCommentList(params).then(data => {
      this.setState({
        fetching: false,
        innerLists: data.content.rows || []
      })
    }).catch(err => {
      message.error(err.message || '获取子评论信息失败')
      this.setState({fetching: false})
    })
  }
  secceedHandler = () => {
    const { resetFields } = this.props.form
    resetFields()
    this._fetchData()
    this.setState({loading: false})
  }
  errorHandler = () => {
    this.setState({loading: false})
  }
  addHandler = () => {
    const { addAimComment, aimDetailInfo, info } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        values.pid = info.id
        values.aimId = aimDetailInfo.id
        values.cb = { err: this.errorHandler, ok: this.secceedHandler }
        addAimComment(values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { fetching, innerLists } = this.state
    return (
      <Row className='aim-detail-inner-comment'>
        <Spin
          spinning={fetching}>
          {innerLists.map(d => <InnerItem key={d.id} info={d} />)}
        </Spin>
        <Col offset={2} span={19}>
          <FormItem>
            {getFieldDecorator('addContent', {
              rules: [{required: true, message: '必须输入信息'}]
            })(
              <TextArea rows={1} placeholder='请输入评论信息' />
            )}
          </FormItem>
        </Col>
        <Col span={3} className='btn-box'>
          <FormItem>
            <Button
              loading={this.state.loading}
              onClick={this.addHandler}>
              提交评论
            </Button>
          </FormItem>
        </Col>
      </Row>
    )
  }
}

InnerComment.propTypes = {
  info: PropTypes.object.isRequired,
  aimDetailInfo: PropTypes.object.isRequired,
  addAimComment: PropTypes.func.isRequired
}

export default Form.create()(InnerComment)
