import { fetchHanlder } from '@/util/api.js'
import types from '@/types'

const { HOME_VIEW_GET_DATALIST } = types
// 获取 aims 事件
export const fetchAimsList = (params) => ({
  type: HOME_VIEW_GET_DATALIST,
  payload: params
})

// 获取 aims 的请求
export const get_aimsHander = (params) => fetchHanlder('get', '/homeView/getlist', params)
