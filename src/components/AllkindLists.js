import React, { Component } from 'react'
import { List, Spin, Button } from 'antd'
import PropTypes from 'prop-types'
import AllKindItem from './AllKindItem.js'

class AllkindLists extends Component {
  onLoadMore = () => {
    const { pagination: { current }, fetchHandler } = this.props
    const params = {
      current: current + 1
    }
    fetchHandler(params)
  }
  render () {
    const { dataSource, loading, showLoadingMore } = this.props
    let isShowLoadingMore = false
    if (showLoadingMore) {
      const { pagination: { current, pageSize, total } } = this.props
      isShowLoadingMore = showLoadingMore && total > current * pageSize
    }
    const loadMore = isShowLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loading && <Spin />}
        {!loading && <Button onClick={this.onLoadMore} type='primary'>... 加载更多</Button>}
      </div>
    ) : null
    return (
      <List
        loading={loading}
        dataSource={dataSource}
        loadMore={loadMore}
        renderItem={item => (
          <AllKindItem key={item.id} info={item} />
        )} />
    )
  }
}

AllkindLists.propTypes = {
  dataSource: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  pagination: PropTypes.object,
  fetchHandler: PropTypes.func,
  showLoadingMore: PropTypes.bool
}

export default AllkindLists
