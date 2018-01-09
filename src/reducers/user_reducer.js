import { createReducer } from '../util/index.js'
import types from '@/types'

const {
  USER_GET_USER_INFO_SUCCEED, USER_GET_USER_INFO_FAILED, USER_OAUTH_ERROR
} = types

const initstate = {
  userInfo: {},
  login: true
}

export default createReducer(initstate, {
  [USER_GET_USER_INFO_SUCCEED]: (state, action) => {
    const { userInfo } = action
    return { ...state, userInfo, login: true }
  },
  [USER_GET_USER_INFO_FAILED]: (state, action) => {
    return { ...state, login: false }
  },
  [USER_OAUTH_ERROR]: (state, action) => {
    return { ...state, login: false, userInfo: {} }
  }
})
