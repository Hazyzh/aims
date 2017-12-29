import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import ComponentItem from '../containers/CommentItem.js'

const AimCommentList = ({loading, lists}) =>
  <Spin
    spinning={loading}
    tip='加载详细信息中...' >
    <div className='aim-detail-comment-box'>
      {lists.map(d => <ComponentItem key={d.id} info={d} />)}
    </div>
  </Spin>
AimCommentList.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default AimCommentList
