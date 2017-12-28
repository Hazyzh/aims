import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Form, Radio, Modal } from 'antd'
const { TextArea } = Input
const RadioGroup = Radio.Group
const FormItem = Form.Item

class CommentInput extends Component {
  clickHandler = () => {
    const { updateAimInfo, aimDetailInfo } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        values.aimId = aimDetailInfo.id
        // 如果状态改变则提示状态
        if (values.aimStatus !== 0) {
          const ref = Modal.confirm({
            title: `确认要修改目标为${values.aimStatus === 1 ? '完成' : '放弃'}?`,
            content: (<div>修改完成后不能再修改状态。</div>),
            cancelText: '取消',
            okText: '确认',
            onOk: () => updateAimInfo(values),
            onCancel: () => { ref.destroy() }
          })
          return false
        }
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
        <FormItem>
          {getFieldDecorator('aimStatus', {
            rules: [{required: true, message: '必须输入信息'}],
            initialValue: 0
          })(
            <RadioGroup>
              <Radio value={0}>进行中</Radio>
              <Radio value={1}>完成</Radio>
              <Radio value={2}>放弃</Radio>
            </RadioGroup>
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
  updateAimInfo: PropTypes.func.isRequired,
  aimStatus: PropTypes.object.isRequired
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onFieldsChanged(changedFields)
  },
  mapPropsToFields(props) {
    return {
      updateContent: Form.createFormField(props.updateContent),
      aimStatus: Form.createFormField(props.aimStatus)
    }
  }
})(CommentInput)
