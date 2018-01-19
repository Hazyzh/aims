import { fetchHanlder, normalHanlder } from '@/util/api.js'
import types from '@/types'

const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_FIELDS_CHANGE, AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_GET_AIM_CHANGE_LISTS,
  AIM_DETAIL_POST_ADD_COMMENT, AIM_DETAIL_GET_AIM_COMMENTS, AIM_DETAIL_TOGGLE_COMMENT_STATE, AIM_DETAIL_POST_ADD_INNER_COMMENT,
  AIM_DETAIL_GET_PRAISE_AND_ATTENTION, AIM_DETAIL_PUT_PRAISE_AND_ATTENTION
} = types
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
// 添加 aim 评论信息
export const addAimComment = (params) => ({
  type: AIM_DETAIL_POST_ADD_COMMENT,
  payload: params
})
// 添加 aim 子评论信息
export const innerAddAimComment = (params) => ({
  type: AIM_DETAIL_POST_ADD_INNER_COMMENT,
  payload: params
})
// 获取 aim 评论信息
export const getAimsComments = (params) => ({
  type: AIM_DETAIL_GET_AIM_COMMENTS,
  payload: params
})
export const toggleCommentState = params => ({
  type: AIM_DETAIL_TOGGLE_COMMENT_STATE,
  payload: params,
  commentId: params.commentId,
  toggleState: params.toggleState
})
// 获取点赞信息
export const getPraiseAndAttention = params => ({
  type: AIM_DETAIL_GET_PRAISE_AND_ATTENTION,
  payload: params
})
// 修改关注或者点赞信息
export const praiseOrAttentionHandler = actionType => ({
  type: AIM_DETAIL_PUT_PRAISE_AND_ATTENTION,
  payload: { actionType }
})
// 更新 aim 信息
export const post_aimInfo = params => fetchHanlder('post', '/detail/aimInfo', params)
// 添加 aim 评论
export const post_aimAddComment = params => fetchHanlder('post', '/comments/aimComment', params)
// 获取 aim 详情的请求
export const get_aimdetail = (params) => normalHanlder('get', '/detail/get_detail', params)
// 获取 aim 更新信息
export const get_aimChangelists = (params) => normalHanlder('get', '/detail/aimInfo', params)
// 获取 aim 评论信息
export const get_aimCommentList = (params) => normalHanlder('get', '/comments/aimComment', params)
// 获取 aim 赞赏信息
export const get_praiseAddAttention = (params) => fetchHanlder('get', '/detail/aimPraise', params)
// 修改 aim 赞赏信息
export const put_praiseAddAttention = (params) => fetchHanlder('put', '/detail/aimPraise', params)
