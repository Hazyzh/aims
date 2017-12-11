import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Input, Avatar, Form } from 'antd'

const Home = ({ a }) =>
  <div>
    <h3>创建一个新任务</h3>
    <p>请谨慎思考,创建一个属于自己的小目标，任务一旦创建将不可删除。</p>
    <i className='aims-line' />
    <Row>
      <Col span={6}>
        <Avatar>
          Hai_Dai
        </Avatar>
        Hazyzh
      </Col>
      <Col span={6}>
        <Input />
      </Col>
    </Row>
  </div>

Home.propTypes = {
  a: PropTypes.string.isRequired
}

export default Form.create()(Home)
