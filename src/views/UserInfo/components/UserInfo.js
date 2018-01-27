import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../containers/HeaderComponent.js'
import AimsList from '../containers/AimsList.js'
import UserDynamic from '../containers/UserDynamic.js'
import { Divider, Icon, Card } from 'antd'

class UserInfo extends Component {
  componentWillMount () {
    const id = this.props.match.params.id
    this._fetchData(id)
  }

  componentWillReceiveProps ({match}) {
    const id = match.params.id
    if (id !== this.props.match.params.id) {
      this._fetchData(id)
    }
  }
  _fetchData = (id) => {
    const params = { id }
    const { getUserBaseInfoHandler } = this.props
    getUserBaseInfoHandler(params)
  }

  render () {
    return (
      <div>
        <HeaderComponent />
        <Card className='item-card'>
          <Divider>
            <span className='line-text'><Icon type='rocket' /> 最近动态</span>
          </Divider>
          <UserDynamic />
        </Card>
        <Card className='item-card'>
          <Divider>
            <span className='line-text'><Icon type='tags-o' /> 目标集</span>
          </Divider>
          <AimsList />
        </Card>
      </div>
    )
  }
}

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
  getUserBaseInfoHandler: PropTypes.func.isRequired
}

export default UserInfo
