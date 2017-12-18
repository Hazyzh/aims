import { fetchHanlder } from '@/util/api.js'
import types from '@/types'

const { HOME_VIEW_GET_DATALIST, HOME_VIEW_CHANGE_AIMS_STATE } = types
// 获取 aims 事件
export const fetchAimsList = (params = {}) => ({
  type: HOME_VIEW_GET_DATALIST,
  payload: params
})
// aims 状态值筛选
export const changeAimsState = (aimsState) => ({
  type: HOME_VIEW_CHANGE_AIMS_STATE,
  aimsState,
  payload: aimsState
})

// 获取 aims 的请求
export const get_aimsHander = (params) => fetchHanlder('get', '/homeView/getlist', params)
