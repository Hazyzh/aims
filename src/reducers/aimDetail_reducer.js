import { createReducer } from '../util/index.js'
import types from '@/types'
import { message } from 'antd'

const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED,
  AIM_DETAIL_FIELDS_CHANGE, AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_POST_DETAIL_INFO_SUCCEED,
  AIM_DETAIL_POST_DETAIL_INFO_FAILED, AIM_DETAIL_GET_AIM_CHANGE_LISTS, AIM_DETAIL_GET_AIM_CHANGE_LISTS_SUCCEED,
  AIM_DETAIL_GET_AIM_CHANGE_LISTS_FAILED
} = types
const initstate = {
  loading: false,
  aimId: '',
  // aim 详情
  aimDetailInfo: {},
  createUser: {},
  updateContent: {},
  aimStatus: {},
  updateLoading: false,
  // upd 列表
  aimDetailChangeList: []
}

export default createReducer(initstate, {
  [AIM_DETAIL_GET_DETAIL]: (state, action) => {
    const { aimId } = action
    return { ...state, loading: true, aimId }
  },
  [AIM_DETAIL_GET_DETAIL_SUCCEED]: (state, action) => {
    const { aimDetailInfo } = action
    return { ...state, loading: false, aimDetailInfo, createUser: aimDetailInfo.aimUser }
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
    message.success('更新成功')
    const { aim_status } = action
    return {
      ...state,
      updateLoading: false,
      updateContent: {},
      aimStatus: {},
      aimDetailInfo: {
        ...state.aimDetailInfo,
        aim_status
      }
    }
  },
  [AIM_DETAIL_POST_DETAIL_INFO_FAILED]: (state, action) => {
    return { ...state, updateLoading: false }
  },
  // 获取 aim 更新记录
  [AIM_DETAIL_GET_AIM_CHANGE_LISTS]: (state, action) => {
    const { aimId } = action
    return { ...state, aimId, loading: true }
  },
  [AIM_DETAIL_GET_AIM_CHANGE_LISTS_SUCCEED]: (state, action) => {
    const { aimDetailChangeList } = action
    return { ...state, aimDetailChangeList, loading: false }
  },
  [AIM_DETAIL_GET_AIM_CHANGE_LISTS_FAILED]: (state, action) => {
    return { ...state, loading: false }
  }
})
