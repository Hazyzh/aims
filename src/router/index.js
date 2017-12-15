import React from 'react'
import App from '../views/App/index.js'
// 登录
import Login from '../views/Login'
// 新增 aims
import AddAims from '../views/AddAims'
// aims 列表
import AddLists from '../views/AimsLists'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Routers = () =>
  <Router>
    <div>
      <App>
        <Route exact path='/addAims' component={AddAims} />
        <Route exact path='/aimsLists' component={AddLists} />
        <Route path='/login' component={Login} />
      </App>
    </div>
  </Router>

export default Routers
