import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Popconfirm } from 'antd'
import logo from './aims.png'

const HeaderComponent = ({login, userInfo, logoutHandler}) =>
  <div className='header-component'>
    <Link to='/'>
      <img className='my-logo' title='aims' src={logo} />
    </Link>
    <span className='user-info'>
      {
        login ? <span>
          <Link to={`/userInfo/${userInfo.int_id}`}>{userInfo.user_name}</Link>
          <Popconfirm title='确定退出？' okText='确定' cancelText='取消' onConfirm={logoutHandler}>
            <a className='logout'>登出</a>
          </Popconfirm>
        </span> : <Link to='/login'>登入</Link>
      }
    </span>
  </div>

HeaderComponent.propTypes = {
  login: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired,
  logoutHandler: PropTypes.func.isRequired
}

export default HeaderComponent
