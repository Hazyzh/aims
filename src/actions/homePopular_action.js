import { normalHanlder } from '@/util/api.js'
import types from '@/types'

const {
  HOMEPOPULAR_GET_LIST
} = types

// 获取 aim changeList
export const getAimsChangeList = (params = {}) => ({
  type: HOMEPOPULAR_GET_LIST,
  payload: params
})
// 获取 aim 详情的请求
export const get_popularHandler = (params) => normalHanlder('get', '/detail/get_popular', params)
