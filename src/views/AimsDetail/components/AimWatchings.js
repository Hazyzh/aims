import React from 'react'
import { Badge, Avatar } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// 没有一个人关注的时候
const getNoOneViews = (aimStatus) => {
  if (aimStatus === 0) {
    return '暂时还没有人员关注'
  } else {
    return '此 aim 没有人员关注'
  }
}

const getHasViews = (aimStatus, watctNumber, watchingUsers) => {
  if (aimStatus === 0) {
    return <span className='text'>{watctNumber} 人正关注着此 aim · 加油 ！</span>
  } else {
    return <span>
      此 aim 共有 {watctNumber} 人关注
      <span className='text'>{
        watchingUsers.map(d =>
          <Link key={d.int_id} to={`/userInfo/${d.int_id}`}>
            <Avatar src={d.avatar_url} />
          </Link>
        )}</span>
    </span>
  }
}

// 获取关注展示信息
const getWatchingViews = (aimStatus, watctNumber, watchingUsers) => {
  if (watctNumber === 0) {
    return getNoOneViews(aimStatus)
  } else {
    return (getHasViews(aimStatus, watctNumber, watchingUsers))
  }
}

const AimWatchings = ({aimDetailInfo, watchingUsers}) =>
  <div className='aim-watchings'>
    <Badge
      style={{ backgroundColor: '#91d5ff' }}
      count={aimDetailInfo.watch_counts}>
      <Avatar
        style={{background: '#0ebf8c'}}
        shape='square'
        size='large'
        icon='user' />
    </Badge>
    <span className='text'>{getWatchingViews(aimDetailInfo.aim_status, aimDetailInfo.watch_counts, watchingUsers)}</span>
  </div>

AimWatchings.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  watchingUsers: PropTypes.array.isRequired
}

export default AimWatchings
