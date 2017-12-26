import React from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'antd'
import moment from 'moment'
const TimelineItem = Timeline.Item

const TimelineComponent = ({aimDetailInfo}) =>
  <Timeline>
    <TimelineItem>创建目标于 { moment(aimDetailInfo.createdAt).format('YYYY-MM-DD') }</TimelineItem>
    <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
    <TimelineItem>Technical testing 2015-09-01</TimelineItem>
    <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
    <TimelineItem>Technical testing 2015-09-01</TimelineItem>
    <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
    <TimelineItem>Technical testing 2015-09-01</TimelineItem>
    <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
  </Timeline>

TimelineComponent.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired
}

export default TimelineComponent
