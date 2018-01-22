import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import { NavLink, withRouter, Route, Switch } from 'react-router-dom'
// aims 列表
import AimsLists from '../../AimsLists'
import HomeLists from '../../HomeLists'
// 新增 aims
import AddAims from '../../AddAims'
// 404
import NoMatch from '../../NoMatch'

import PrivateRoute from '@/router/PrivateRoute.js'

const breadDatalists = [
  { path: '/home/popular', text: '热门', icon: 'appstore' },
  { path: '/home/my', text: '我的任务', icon: 'user' },
  { path: '/home/addAims', text: '添加任务', icon: 'edit' }
]

const Home = withRouter((props) => {
  return (
    <div>
      <Breadcrumb className='home-tabbar'>
        {
          breadDatalists.map(d => (
            <Breadcrumb.Item key={d.path}>
              <NavLink to={d.path} activeStyle={{color: 'rgba(14, 191, 140, 0.5)'}}>
                <Icon type={d.icon} />
                <span className='space'>{d.text}</span>
              </NavLink>
            </Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
      <Switch>
        <Route
          exact
          path='/home/popular'
          component={HomeLists} />
        <PrivateRoute path='/home/my' component={AimsLists} />
        <PrivateRoute path='/home/addAims' component={AddAims} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
})

export default Home
