import { createReducer } from '../util/index.js'
import types from '@/types'
import { message } from 'antd'

const {
  USERINFO_GET_BASE_INFO, USERINFO_GET_BASE_INFO_SUCCEED, USERINFO_GET_BASE_INFO_FAILED,
  USERINFO_POST_ADD_FRIEND, USERINFO_POST_ADD_FRIEND_SUCCEED, USERINFO_POST_ADD_FRIEND_FAILED
} = types

const initstate = {
  id: '',
  userInfo: {},
  loading: false,
  addLoading: false,
  aimLists: []
}

export default createReducer(initstate, {
  [USERINFO_GET_BASE_INFO]: (state, action) => {
    const { id } = action.payload
    return { ...state, id, loading: true }
  },
  [USERINFO_GET_BASE_INFO_SUCCEED]: (state, action) => {
    const { userInfo } = action
    return { ...state, userInfo, loading: false }
  },
  [USERINFO_GET_BASE_INFO_FAILED]: (state, action) => {
    return { ...state, loading: false, userInfo: {} }
  },
  [USERINFO_POST_ADD_FRIEND]: (state, action) => {
    return { ...state, addLoading: true }
  },
  [USERINFO_POST_ADD_FRIEND_SUCCEED]: (state, action) => {
    message.success('添加成功')
    const userInfo = { ...state.userInfo, isFriend: true }
    return { ...state, addLoading: false, userInfo }
  },
  [USERINFO_POST_ADD_FRIEND_FAILED]: (state, action) => {
    return { ...state, addLoading: false }
  }
})
