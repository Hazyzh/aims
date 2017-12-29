import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Form, Button } from 'antd'
const FormItem = Form.Item
const { TextArea } = Input

class AimComment extends Component {
  clickHandler = () => {
    // const { updateAimInfo, aimDetailInfo } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
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
                  getFieldDecorator('addComment', {
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
  userInfo: PropTypes.object.isRequired
}

export default Form.create()(AimComment)
