import { createReducer } from '../util/index.js'
import types from '@/types'

const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED,
  AIM_DETAIL_FIELDS_CHANGE, AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_POST_DETAIL_INFO_SUCCEED,
  AIM_DETAIL_POST_DETAIL_INFO_FAILED
} = types
const initstate = {
  loading: false,
  aimId: '',
  aimDetailInfo: {},
  updateContent: {},
  updateLoading: false
}

export default createReducer(initstate, {
  [AIM_DETAIL_GET_DETAIL]: (state, action) => {
    const { aimId } = action
    return { ...state, loading: true, aimId }
  },
  [AIM_DETAIL_GET_DETAIL_SUCCEED]: (state, action) => {
    const { aimDetailInfo } = action
    return { ...state, loading: false, aimDetailInfo }
  },
  [AIM_DETAIL_GET_DETAIL_FAILED]: (state, action) => {
    return { ...state, loading: false }
  },
  // field change
  [AIM_DETAIL_FIELDS_CHANGE]: (state, action) => {
    const { changedFields } = action
    return { ...state, ...changedFields }
  },
  // 更新 update aim state
  [AIM_DETAIL_POST_DETAIL_INFO]: (state, action) => {
    return { ...state, updateLoading: true }
  },
  [AIM_DETAIL_POST_DETAIL_INFO_SUCCEED]: (state, action) => {
    return { ...state, updateLoading: false, updateContent: {} }
  },
  [AIM_DETAIL_POST_DETAIL_INFO_FAILED]: (state, action) => {
    return { ...state, updateLoading: false }
  }
})
