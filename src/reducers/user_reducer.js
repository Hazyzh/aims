import { createReducer } from '../util/index.js'
import types from '@/types'

const {
  USER_GET_USER_INFO_SUCCEED, USER_GET_USER_INFO_FAILED
} = types

const initstate = {
  userInfo: {},
  login: false
}

export default createReducer(initstate, {
  [USER_GET_USER_INFO_SUCCEED]: (state, action) => {
    const { userInfo } = action
    return { ...state, userInfo, login: true }
  },
  [USER_GET_USER_INFO_FAILED]: (state, action) => {
    return { ...state, login: false }
  }
})
