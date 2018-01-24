import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Icon, Button } from 'antd'

const HeaderComponent = ({userInfo, isSelf, addHandler, loading, fetchLoading}) =>
  <div className='header-box'>
    <div className='user-info'>
      <h3>{userInfo.user_name}</h3>
      <p>
        <Icon type='calendar' className='icon' />
        <span>注册时间: </span>
        {moment(userInfo.createdAt).format('YYYY年MM月DD日')}
      </p>
      {
        !isSelf && !userInfo.isFriend && !fetchLoading &&
        <Button
          type='primary'
          loading={loading}
          onClick={() => addHandler(userInfo.id)}>
          <Icon type='plus' />
          添加好友
        </Button>
      }
    </div>
    <div className='head-image'>
      <img src={userInfo.avatar_url} />
      {userInfo.isFriend && <Icon type='smile' className='friend-ship-icon' />}
    </div>
  </div>

HeaderComponent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  isSelf: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchLoading: PropTypes.bool.isRequired,
  addHandler: PropTypes.func.isRequired
}

export default HeaderComponent
