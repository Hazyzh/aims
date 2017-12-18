import React from 'react'
import App from '../views/App/index.js'
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

const Routers = () =>
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

export default Routers
