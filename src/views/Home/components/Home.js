import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import { NavLink, withRouter, Route } from 'react-router-dom'
// aims 列表
import AimsLists from '../../AimsLists'
import HomeLists from '../../HomeLists'
// 新增 aims
import AddAims from '../../AddAims'

const Home = withRouter((props) => {
  console.log(props)
  return (
    <div>
      <Breadcrumb className='home-tabbar'>
        <Breadcrumb.Item>
          <NavLink to='/home/share' activeStyle={{color: 'rgba(14, 191, 140, 0.5)'}}>
            <Icon type='home' />
            <span className='space'>随便看看</span>
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to='/home/my' activeStyle={{color: 'rgba(14, 191, 140, 0.5)'}}>
            <Icon type='user' />
            <span className='space'>我的任务</span>
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to='/home/addAims' activeStyle={{color: 'rgba(14, 191, 140, 0.5)'}}>
            <Icon type='edit' />
            <span className='space'>添加任务</span>
          </NavLink>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Route
        exact
        path='/home/share'
        component={HomeLists} />
      <Route path='/home/my' component={AimsLists} />
      <Route path='/home/addAims' component={AddAims} />
    </div>
  )
})

export default Home
