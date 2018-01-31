import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Avatar, Form, Divider, DatePicker, Button, message } from 'antd'
import moment from 'moment'
const { TextArea } = Input
const FormItem = Form.Item

// 只能选择三个月内的目标
function disabledDate(current) {
  // Can not select days before today and today
  return current && !current.isBetween(moment.now(), moment().add(3, 'months'))
}

// 获取目标距离现在的距离
function getAimDays(deadline) {
  if (!deadline) return null

  return deadline.diff(moment.now(), 'days') + 1
}

class AddAims extends Component {
  addHandler = () => {
    const { validateFields } = this.props.form
    validateFields((err, values) => {
      if (!err) {
        const { content, deadline, title } = values
        const params = {
          content,
          title,
          deadline: deadline.format('YYYY-MM-DD')
        }
        this.props.addHandler(params)
      } else {
        console.log(err)
        for (let i in err) {
          message.warning(err[i].errors[0].message)
          break
        }
      }
    })
  }

  render () {
    const { getFieldDecorator, getFieldValue } = this.props.form
    const time = getAimDays(getFieldValue('deadline'))
    const { loading, userInfo } = this.props
    return (
      <div>
        <div>
          <h3>创建一个新任务</h3>
          <p>请谨慎思考,创建一个属于自己的小目标，任务一旦创建将不可删除。</p>
          <Divider />
        </div>
        <Row className='AddAims-avatar-box'>
          <Col span={4}>
            <Avatar className='avatar' src={userInfo.avatar_url} />
            <a>
              / {userInfo.user_name}
            </a>
          </Col>
          <Col span={12}>
            <FormItem>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: '必须输入标题' }]
              })(
                <Input
                  placeholder='标题' />
              )}
            </FormItem>
          </Col>
        </Row>
        <p>输入目标的标题，尽量简介明了，文字长度30个文字以内</p>
        <h3>具体描述</h3>
        <Row>
          <Col span={16}>
            <FormItem>
              {getFieldDecorator('content', {
                rules: [{ required: true, message: '必须输入内容描述' }]
              })(
                <TextArea
                  rows={8}
                  placeholder='请输入目标的具体信息' />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row className='AddAims-deadline'>
          <Col>
            <span className='title'>截止日期</span>
            {getFieldDecorator('deadline', {
              rules: [{ required: true, message: '必须选择截止日期' }]
            })(
              <DatePicker
                showToday={false}
                placeholder='请选择截止日期'
                disabledDate={disabledDate} />
            )}
            <span className='tips'>
              {time ? <span> 距离选中的截止时间还有 <span className='dead-data'>{time}</span> 天 </span>
                : <span>请选择截止日期</span>
              }
            </span>
          </Col>
        </Row>
        <Button
          loading={loading}
          onClick={this.addHandler}
          type='primary' >
          发布
        </Button>
      </div>
    )
  }
}

AddAims.propTypes = {
  loading: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired,
  addHandler: PropTypes.func.isRequired
}

export default Form.create()(AddAims)
