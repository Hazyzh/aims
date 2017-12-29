import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Button, Form } from 'antd'
const FormItem = Form.Item
const { TextArea } = Input

class InnerComment extends Component {
  state = {
    loading: false
  }
  secceedHandler = () => {
    const { resetFields } = this.props.form
    resetFields()
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
    return (
      <Row className='aim-detail-inner-comment'>
        <Col span={21}>
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
