import { fetchHanlder } from '@/util/api.js'
import types from '@/types'

const { ADD_AIMS_HANDER } = types
// 新增 aims 的按钮事件
export const addHandler = (params) => ({
  type: ADD_AIMS_HANDER,
  payload: params
})

// 新增 aims 的请求
export const post_addHandler = (params) => fetchHanlder('post', '/addAims', params)
