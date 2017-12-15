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
