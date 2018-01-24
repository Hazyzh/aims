import React, { Component } from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'
import AllKindItem from './AllKindItem.js'

class AllkindLists extends Component {
  render () {
    const { dataSource, loading } = this.props
    return (
      <List
        loading={loading}
        dataSource={dataSource}
        renderItem={item => (
          <AllKindItem key={item.id} info={item} />
        )} />
    )
  }
}

AllkindLists.propTypes = {
  dataSource: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default AllkindLists
