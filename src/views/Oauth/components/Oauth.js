import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { getQueryString } from '@/util'
import axios from 'axios'
import { setToken } from '@/util/token.js'
// 验证中
import OauthIng from './OauthIng.js'

class Oauth extends Component {
  state = {
    loading: true
  }

  componentWillMount() {
    // console.log(this.props)
    this._OauthVerify()
  }
  _OauthVerify = () => {
    const code = getQueryString('code')
    const url = getQueryString('state')
    const { history } = this.props
    axios.get(`/sina/oauth?code=${code}`).then(data => {
      const res = data.data
      if (res.code === 0) {
        this.setState({
          loading: false
        })
        setToken(res.content)
        this.props.getUserInfoHandler()
        history.push(url)
      }
    }).catch(err => {
      console.log(err, url)
    })
  }
  render () {
    const { loading } = this.state
    return (
      <Spin spinning={loading}>
        {
          loading ? <OauthIng /> : '12'
        }
      </Spin>
    )
  }
}

Oauth.propTypes = {
  getUserInfoHandler: PropTypes.func.isRequired
}

export default Oauth
