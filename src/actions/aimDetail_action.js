import { fetchHanlder } from '@/util/api.js'
import types from '@/types'

const { AIM_DETAIL_GET_DETAIL } = types
// 后去 aim 详情事件
export const changeAimID = (params) => ({
  type: AIM_DETAIL_GET_DETAIL,
  aimId: params.aimId,
  payload: params
})

// 获取aim详情的请求
export const get_aimdetail = (params) => fetchHanlder('get', '/detail/get_detail', params)
