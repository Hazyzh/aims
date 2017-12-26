import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Form } from 'antd'
const { TextArea } = Input
const FormItem = Form.Item

class CommentInput extends Component {
  clickHandler = () => {
    const { updateAimInfo, aimDetailInfo } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        values.aimId = aimDetailInfo.id
        updateAimInfo(values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { loading } = this.props
    return (
      <div className='aims-deatil-updateInput'>
        <FormItem>
          {getFieldDecorator('updateContent', {
            rules: [{required: true, message: '必须输入信息'}]
          })(
            <TextArea
              rows={4}
              placeholder='请输入更新内容' />
          )}
        </FormItem>
        <Button
          loading={loading}
          onClick={this.clickHandler}
          type='primary'
          size='large' >
          确认
        </Button>
      </div>
    )
  }
}

CommentInput.propTypes = {
  loading: PropTypes.bool.isRequired,
  updateContent: PropTypes.object.isRequired,
  onFieldsChanged: PropTypes.func.isRequired,
  updateAimInfo: PropTypes.func.isRequired
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onFieldsChanged(changedFields)
  },
  mapPropsToFields(props) {
    return {
      updateContent: Form.createFormField(props.updateContent)
    }
  }
})(CommentInput)
