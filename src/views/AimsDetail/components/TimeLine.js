import React from 'react'
import PropTypes from 'prop-types'
import { Timeline, Tag } from 'antd'
import moment from 'moment'
const TimelineItem = Timeline.Item

const TimelineComponent = ({aimDetailInfo, aimDetailChangeList}) =>
  <Timeline className='aim-detail-timeline'>
    <TimelineItem color='#5fd6c3'>
      <span className='text'>创建目标于</span>
      <Tag color='#5fd6c3' className='time'>{ moment(aimDetailInfo.createdAt).format('YYYY-MM-DD hh:mm:ss') }</Tag>
    </TimelineItem>
    {aimDetailChangeList.map(d =>
      <TimelineItem key={d.id} color='#87d068'>
        <span className='text'>{d.update_content}</span>
        <Tag color='#87d068' className='time'>{ moment(d.createdAt).format('YYYY-MM-DD HH:mm:ss') }</Tag>
      </TimelineItem>
    )}
  </Timeline>

TimelineComponent.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  aimDetailChangeList: PropTypes.array.isRequired
}

export default TimelineComponent
