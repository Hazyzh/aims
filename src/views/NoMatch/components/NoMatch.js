import React from 'react'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'

const NoMatch = () =>
  <Row>
    <Col span={16}>
      <div className='not-found-img' />
    </Col>
    <Col span={8}>
      <div className='not-found-text'>
        <h1>404</h1>
        <p>抱歉，你访问的页面不存在</p>
        <Link to='/'>
          <Button
            type='primary'>
            返回首页
          </Button>
        </Link>
      </div>
    </Col>
  </Row>

export default NoMatch
