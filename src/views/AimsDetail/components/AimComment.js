import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Button } from 'antd'
const FormItem = Form.Item
const { TextArea } = Input

class AimComment extends Component {
  clickHandler = () => {
    const { addAimComment, aimDetailInfo } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        values.pid = 0
        values.aimId = aimDetailInfo.id
        addAimComment(values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { loading } = this.props
    return (
      <div className='aim-detail-comment-box'>
        <div className='aim-detail-comment'>
          <Row gutter={24}>
            <Col>
              <b className='title'>评论:</b>
            </Col>
            <Col>
              <FormItem>
                {
                  getFieldDecorator('addContent', {
                    rules: [{required: true, message: '必须输入信息'}]
                  })(
                    <TextArea
                      rows={4}
                      placeholder='请输入评论内容' />
                  )
                }
              </FormItem>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Button
                type='primary'
                loading={loading}
                onClick={this.clickHandler}
                size='large' >
                发表评论
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

AimComment.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  addContent: PropTypes.object.isRequired,
  // func
  addAimComment: PropTypes.func.isRequired,
  onFieldsChanged: PropTypes.func.isRequired
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onFieldsChanged(changedFields)
  },
  mapPropsToFields(props) {
    return {
      addContent: Form.createFormField(props.addContent)
    }
  }
})(AimComment)
