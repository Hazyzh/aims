import React from 'react'
import PropTypes from 'prop-types'
import { Timeline, Tag, Icon } from 'antd'
import { getCountBeginTime } from '@/util'

const TimelineItem = Timeline.Item

const getColor = status => {
  let color, tagColor
  if (status === 0) {
    color = '#d9d9d9'
    tagColor = '#91d5ff'
  } else if (status === 1) {
    color = '#87d068'
    tagColor = '#87d068'
  } else if (status === 2) {
    color = '#820014'
    tagColor = '#820014'
  }
  return { color, tagColor }
}
const TimelineComponent = ({aimDetailInfo, aimDetailChangeList}) =>
  <Timeline className='aim-detail-timeline'>
    <TimelineItem color='#5fd6c3'>
      <span className='text'>创建目标于</span>
      <Tag color='#5fd6c3' className='time'>{ getCountBeginTime(aimDetailInfo.createdAt) }</Tag>
    </TimelineItem>
    {aimDetailChangeList.map(d =>
      <TimelineItem key={d.id} color={getColor(d.aim_status).color}>
        <span className='text'>
          <span className='system-text'>{d.is_systemInfo &&
            <span><Icon type='notification' />系统提示：</span>
          }</span>
          <span className={d.is_systemInfo ? 'system-text' : ''}>{d.update_content}</span>
        </span>
        <Tag color={getColor(d.aim_status).tagColor} className='time'>{ getCountBeginTime(d.createdAt) }</Tag>
      </TimelineItem>
    )}
  </Timeline>

TimelineComponent.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  aimDetailChangeList: PropTypes.array.isRequired
}

export default TimelineComponent
