import moment from 'moment'

/**
 * 创建键值 map 性质的 reducer 函数
 * @param  {any} initState 初始化 state 的值
 * @param  {object} handlers  包含处理各种函数的方法对象，键值为 action 的 type 名称
 * @return {any} 处理函数处理后返回的值
 */
export const createReducer = (initState, handlers) => (state = initState, action) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action)
  } else {
    return state
  }
}
/**
 * key map 创建
 */
export const createTypes = obj => {
  var key
  var mirrored = {}

  if (obj && typeof obj === 'object') {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        mirrored[key] = key
      }
    }
  }
  return mirrored
}

/**
 * 传入 aim 项目计算出一些时间值返回
 * @param  {object} aim 获取到到目标项目
 * @return {object}
 *         @propTypes {proportion} 消耗分为 15 个等级返回是哪一个等级，级别越高离 deadline 越近
 *         @propTypes {lastDays} 距离 deadline 剩余到天数
 *         @propTypes {isOver} 是否已经超时
 */
export const getTimeInfo = aim => {
  const { createdAt, aim_deadline } = aim
  const now = moment()
  const start = moment(createdAt)
  const end = moment(aim_deadline)

  const totalHours = moment.duration(end - start).asHours()
  const nowdata = moment.duration(end - now)
  const useHours = nowdata.asHours()
  let lastDays = nowdata.asDays()
  const isOver = lastDays < 0
  lastDays = Math.abs(lastDays) >>> 0
  const proportion = isOver ? 14 : 15 - ((useHours / totalHours) * 15 >>> 0)
  return {
    proportion,
    lastDays,
    isOver
  }
}
