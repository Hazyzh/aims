import React, { Component } from 'react'
import App from '../views/App/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserInfoHandler } from '@/actions/user_action.js'
// 登录
import Login from '../views/Login'
// 新增 aims
import AddAims from '../views/AddAims'
// 主页
import Home from '../views/Home'
// 详情页
import AimsDetail from '../views/AimsDetail'
// test router
import Test from './Test.js'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Routers extends Component {
  componentWillMount() {
    const { getUserInfoHandler } = this.props
    // 页面初始化时候获取用户信息
    getUserInfoHandler()
  }
  render() {
    return (
      <Router>
        <div>
          <App>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/addAims' component={AddAims} />
            <Route path='/aimsDetail/:aimId' component={AimsDetail} />
            <Route path='/test' component={Test} />
          </App>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
  getUserInfoHandler: bindActionCreators(getUserInfoHandler, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Routers)
