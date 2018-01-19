import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Alert, Row, Col } from 'antd'
import SiteInfo from './SiteInfo.js'

const client_id = '1248280488'
const redirect_uri = 'http://aims.hazyzh.com:8080/sinaOuath'

const login = (route) => {
  const url = `https://api.weibo.com/oauth2/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${encodeURIComponent(route)}`
  window.location.href = url
}
class Home extends Component {
  render () {
    const { location } = this.props
    const { from } = location.state || { from: { pathname: '/' } }
    return (
      <div className='login-box'>
        {from.pathname !== '/' && <Alert showIcon message='你访问的页面需要登录后才能访问' type='warning' />}
        <Row>
          <Col span={16}>
            <div className='login-img' />
          </Col>
          <Col span={8}>
            <SiteInfo />
            <div className='btn-box'>
              <Button
                size='large'
                type='primary'
                onClick={() => login(from.pathname)}>
                <Icon type='weibo' />微博登录
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

Home.propTypes = {
  a: PropTypes.string.isRequired
}

export default Home
