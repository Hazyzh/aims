import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import logo from './aims.png'

const HeaderComponent = ({login, userInfo}) =>
  <div className='header-component'>
    <span className='logo'>
      <Link to='/'>
        <Avatar className='my-logo' src={logo} />
      </Link>
    </span>
    <span className='user-info'>
      { login ? <Link to={`/userInfo/${userInfo.int_id}`}>{userInfo.user_name}</Link> : <Link to='/login'>登入</Link> }
    </span>
  </div>

HeaderComponent.propTypes = {
  login: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired
}

export default HeaderComponent
