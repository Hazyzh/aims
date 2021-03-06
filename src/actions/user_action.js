import { fetchHanlder } from '@/util/api.js'
import types from '@/types'

const { USER_GET_USER_INFO, USER_LOGOUT } = types
// 新增 aims 的按钮事件
export const getUserInfoHandler = () => ({
  type: USER_GET_USER_INFO
})
//
export const logoutHandler = () => ({
  type: USER_LOGOUT
})
// 新增 aims 的请求
export const get_userInfoHandler = (params) => fetchHanlder('get', '/user/userInfo', params)
