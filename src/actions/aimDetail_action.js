import { fetchHanlder } from '@/util/api.js'
import types from '@/types'

const { AIM_DETAIL_GET_DETAIL, AIM_DETAIL_FIELDS_CHANGE, AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_GET_AIM_CHANGE_LISTS } = types
// 获取 aim 详情事件
export const changeAimID = (params) => ({
  type: AIM_DETAIL_GET_DETAIL,
  aimId: params.aimId,
  payload: params
})
// 获取 aim changeList
export const getAimsChangeList = (params) => ({
  type: AIM_DETAIL_GET_AIM_CHANGE_LISTS,
  aimId: params.aimId,
  payload: params
})
// 表单内容改变函数
export const detailFieldsChange = (changedFields) => ({
  type: AIM_DETAIL_FIELDS_CHANGE,
  changedFields
})
// 添加 aim 时间段信息
export const updateAimInfo = (params) => ({
  type: AIM_DETAIL_POST_DETAIL_INFO,
  payload: params
})
// 更新 aim 信息
export const post_aimInfo = params => fetchHanlder('post', '/detail/aimInfo', params)
// 获取aim详情的请求
export const get_aimdetail = (params) => fetchHanlder('get', '/detail/get_detail', params)
// 获取 aim 更新信息
export const get_aimChangelists = (params) => fetchHanlder('get', '/detail/aimInfo', params)
