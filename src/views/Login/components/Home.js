import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

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
      <div>
        <Button onClick={() => login(from.pathname)}>click</Button>
        {from.pathname !== '/' && <p>你访问的页面需要登录后才能访问</p>}
      </div>
    )
  }
}

Home.propTypes = {
  a: PropTypes.string.isRequired
}

export default Home
