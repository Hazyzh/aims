import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../containers/HeaderComponent.js'
import AimsList from '../containers/AimsList.js'
import { Divider, Icon } from 'antd'

class UserInfo extends Component {
  componentWillMount () {
    this._fetchData()
  }

  _fetchData = () => {
    const params = this.props.match.params
    const { getUserBaseInfoHandler } = this.props
    getUserBaseInfoHandler(params)
  }

  render () {
    return (
      <div>
        <HeaderComponent />
        <Divider>
          <span className='line-text'><Icon type='tags-o' /> 目标集</span>
        </Divider>
        <AimsList />
      </div>
    )
  }
}

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
  getUserBaseInfoHandler: PropTypes.func.isRequired
}

export default UserInfo
