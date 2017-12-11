import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Row, Col, Input, Avatar, Form, Divider, DatePicker } from 'antd'
import moment from 'moment'
const { TextArea } = Input

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
  render () {
    const { getFieldDecorator, getFieldValue } = this.props.form
    const time = getAimDays(getFieldValue('deadline'))
    return (
      <div>
        <div>
          <h3>创建一个新任务</h3>
          <p>请谨慎思考,创建一个属于自己的小目标，任务一旦创建将不可删除。</p>
          <Divider />
        </div>
        <Row className='AddAims-avatar-box'>
          <Col span={2}>
            <Avatar className='avatar'>
              Hai_Dai
            </Avatar>
            <span>
              / Hazyzh
            </span>
          </Col>
          <Col span={6}>
            {getFieldDecorator('title')(
              <Input
                placeholder='标题' />
            )}
          </Col>
        </Row>
        <p>输入目标的标题，尽量简介明了，文字长度30个文字以内</p>
        <h3>具体描述</h3>
        <Row>
          <Col span={8}>
            {getFieldDecorator('content')(
              <TextArea
                rows={8}
                placeholder='请输入目标的具体信息' />
            )}
          </Col>
        </Row>
        <Row className='AddAims-deadline'>
          <Col>
            <span className='title'>截止日期</span>
            {getFieldDecorator('deadline')(
              <DatePicker
                showToday={false}
                placeholder='请选择截止日期'
                rows={8}
                disabledDate={disabledDate} />
            )}
            <span className='tips'>
              {time &&
                <span>
                  距离选中的截止时间还有 <span className='dead-data'>{time}</span> 天
                </span>
              }
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

AddAims.propTypes = {
}

export default Form.create()(AddAims)
