import { createReducer } from '../util/index.js'
import types from '@/types'
import { clearToken } from '@/util/token.js'
import { message } from 'antd'
const {
  USER_GET_USER_INFO_SUCCEED, USER_GET_USER_INFO_FAILED, USER_OAUTH_ERROR,
  USER_LOGOUT
} = types

const initstate = {
  userInfo: {},
  login: true,
  fetingData: true
}

export default createReducer(initstate, {
  [USER_GET_USER_INFO_SUCCEED]: (state, action) => {
    const { userInfo } = action
    return { ...state, userInfo, login: true, fetingData: false }
  },
  [USER_GET_USER_INFO_FAILED]: (state, action) => {
    const { noMsg } = action
    if (!noMsg) { message.info('登录信息认证失败，请尝试重新登录') }
    clearToken()
    return { ...state, login: false, fetingData: false }
  },
  [USER_OAUTH_ERROR]: (state, action) => {
    return { ...state, login: false, userInfo: {} }
  },
  // 退出登录
  [USER_LOGOUT]: (state, action) => {
    clearToken()
    return { ...state, login: false, userInfo: {} }
  }
})
