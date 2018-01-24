import { fetchHanlder } from '@/util/api.js'
import types from '@/types'

const {
  HOMEDYNAMIC_GET_LIST
} = types

// 获取 aim changeList
export const fetchDynamicList = (params = {}) => ({
  type: HOMEDYNAMIC_GET_LIST,
  payload: params,
  initSearch: params.initSearch
})
// 获取 aim 详情的请求
export const get_dynamicHandler = (params) => fetchHanlder('get', '/detail/getDynamic', params)
