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
/**
 * 获取url参数
 * @param  {string} name 参数名称
 * @return {string|null}      参数值 没有则返会 {null}
 */
export const getQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
/**
 * 获取发布距离现在的时间
 *  如果间隔【分，小时，天】则返回对应 n 天／小时／分
 *  如果间隔【月】 则返回日期
 * @param  {string} time 时间
 * @return {string}      距离现在的时间
 */
export const getCountBeginTime = (time) => {
  const begin = moment(time)
  const now = moment()
  let resText
  const years = now.diff(begin, 'months')
  if (years > 0) return moment(time).format('YYYY年MM月DD日')
  const duration = now.diff(begin, 'days')
  if (duration > 0) {
    resText = duration + '天'
  } else {
    const d = moment.duration(now.diff(begin))
    const hours = d.get('hours')
    const minutes = d.get('minutes')
    if (hours > 0) {
      resText = hours + '小时' + minutes ? minutes + '分钟' : ''
    } else {
      resText = minutes ? minutes + '分钟' : '1分种'
    }
  }
  return resText + '前'
}
