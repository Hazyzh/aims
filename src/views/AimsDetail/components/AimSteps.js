import React from 'react'
import PropTypes from 'prop-types'
import { Steps } from 'antd'
const Step = Steps.Step
/**
 * 从后面获取元素
 * @param  {array} arr   目标数组
 * @param  {number} index 从后面查的下标
 * @return {any}       找的 item, 没有则返回 undefined
 */
const getItemFromLast = (arr, index) => {
  const len = arr.length
  const count = len - index - 1
  return arr[count]
}

const infoMap = {
  text: {
    '1': '已完成',
    '2': '已放弃'
  },
  status: {
    '1': 'finish',
    '2': 'error'
  }
}
// 获取 info
const getInfos = (list) => {
  let status = 'process'
  let current = 1
  let text = '待完成'
  const info = getItemFromLast(list, 0)
  if (info && info.aim_status !== 0) {
    current = 2
    text = infoMap.text[info.aim_status]
    status = infoMap.status[info.aim_status]
  }
  return {text, status, current}
}
const AimSteps = ({aimDetailInfo, aimDetailChangeList}) => {
  const info = getInfos(aimDetailChangeList)
  return (
    <Steps current={info.current} status={info.status}>
      <Step title='Begin' description={aimDetailInfo.aim_title} />
      <Step title='Doing' description='进行中' />
      <Step title='End' description={info.text} />
    </Steps>
  )
}

AimSteps.propTypes = {
  aimDetailInfo: PropTypes.object.isRequired,
  aimDetailChangeList: PropTypes.array.isRequired
}
export default AimSteps
