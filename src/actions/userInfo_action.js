import { fetchHanlder, normalHanlder } from '@/util/api.js'
import types from '@/types'

const { USERINFO_GET_BASE_INFO, USERINFO_POST_ADD_FRIEND } = types
// 新增 aims 的按钮事件sasa
export const getUserBaseInfoHandler = (params = {}) => ({
  type: USERINFO_GET_BASE_INFO,
  payload: params
})
// 添加好友按钮的事件
export const addFriendHandler = (userId, type) => ({
  type: USERINFO_POST_ADD_FRIEND,
  payload: { id: userId, type }
})
// 新增 aims 的请求
export const get_userBaseInfoHandler = (params) => normalHanlder('get', '/user/userBaseInfo', params)
// 增加好友的请求
export const post_addFriendsHandler = (params) => fetchHanlder('post', '/user/addFriend', params)
// 获取最近动态
export const get_latesetDynamic = (params) => normalHanlder('get', '/user/latesetDynamic', params)
// 获取近期 aims 的请求
export const get_normalAimsHander = (params) => normalHanlder('get', '/homeView/getlist', params)
