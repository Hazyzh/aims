import React, { Component } from 'react'
import App from '../views/App/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserInfoHandler } from '@/actions/user_action.js'
// 登录
import Login from '../views/Login'
// 主页
import Home from '../views/Home'
// 详情页
import AimsDetail from '../views/AimsDetail'
// 404
import NoMatch from '../views/NoMatch'
// test router
// import Test from './Test.js'
// oauth
import Oauth from '../views/Oauth'
// UserInfo
import UserInfo from '../views/UserInfo'
import {
  Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import history from '@/util/history.js'

let LocaleProvider
let zh_CN
if (process.env.NODE_ENV !== 'production') {
  LocaleProvider = require('antd').LocaleProvider
  zh_CN = require('antd/lib/locale-provider/zh_CN')
} else {
  LocaleProvider = window.antd.LocaleProvider
  zh_CN = window.antd.locales.zh_CN.default
}

class Routers extends Component {
  componentWillMount() {
    const { getUserInfoHandler } = this.props
    // 页面初始化时候获取用户信息
    getUserInfoHandler()
  }
  render() {
    const { loading, login } = this.props
    return (
      <LocaleProvider locale={zh_CN}>
        <Router history={history}>
          <div>
            <App>
              {
                loading ? '' : <Switch>
                  <Route exact path='/' render={() => login ? <Redirect to='/home/dynamic' /> : <Redirect to='/home/popular' />} />
                  <Route path='/home' component={Home} />
                  <Route path='/aimsDetail/:aimId' component={AimsDetail} />
                  <Route path='/login' component={Login} />
                  <Route path='/sinaOuath' component={Oauth} />
                  <Route path='/userInfo/:id' component={UserInfo} />
                  <Route component={NoMatch} />
                </Switch>
              }
            </App>
          </div>
        </Router>
      </LocaleProvider>
    )
  }
}

const mapStateToProps = ({user}) => ({
  loading: user.fetingData,
  login: user.login
})

const mapDispatchToProps = dispatch => ({
  getUserInfoHandler: bindActionCreators(getUserInfoHandler, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Routers)
