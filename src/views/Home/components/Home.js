import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import { Link, withRouter, Route } from 'react-router-dom'
// aims 列表
import AimsLists from '../../AimsLists'

const Home = withRouter((props) => {
  return (
    <div>
      <Breadcrumb className='home-tabbar'>
        <Breadcrumb.Item>
          <Link to='/home/aimsLists'>
            <Icon type='home' />
            <span>随便看看</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/home/aimsLists'>
            <Icon type='user' />
            <span>我的任务</span>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Route
        exact
        path='/home/aimsLists'
        component={AimsLists} />
      <Route exact path='/' component={AimsLists} />
    </div>
  )
})

export default Home
