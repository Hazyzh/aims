import { createReducer } from '../util/index.js'
import types from '@/types'
import { message } from 'antd'

const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED,
  AIM_DETAIL_FIELDS_CHANGE, AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_POST_DETAIL_INFO_SUCCEED,
  AIM_DETAIL_POST_DETAIL_INFO_FAILED, AIM_DETAIL_GET_AIM_CHANGE_LISTS, AIM_DETAIL_GET_AIM_CHANGE_LISTS_SUCCEED,
  AIM_DETAIL_GET_AIM_CHANGE_LISTS_FAILED, AIM_DETAIL_POST_ADD_COMMENT, AIM_DETAIL_POST_ADD_COMMENT_SUCCEED, AIM_DETAIL_POST_ADD_COMMENT_FAILED,
  AIM_DETAIL_GET_AIM_COMMENTS, AIM_DETAIL_GET_AIM_COMMENTS_SUCCEED, AIM_DETAIL_GET_AIM_COMMENTS_FAILED, AIM_DETAIL_TOGGLE_COMMENT_STATE,
  AIM_DETAIL_GET_PRAISE_AND_ATTENTION_SUCCEED, AIM_DETAIL_PUT_PRAISE_AND_ATTENTION_SUCCEED
} = types
const initstate = {
  loading: false,
  aimId: '',
  // aim 详情
  aimDetailInfo: {},
  createUser: {},
  updateContent: {},
  addContent: {},
  aimStatus: {},
  updateLoading: false,
  addCommentLoading: false,
  // upd 列表
  aimDetailChangeList: [],
  // 评论列表
  getCommentLoading: false,
  aimCommentList: [],
  pagination: {},
  // 评论是否展开
  commentToggleState: {},
  isPraise: false,
  isWatching: false
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
  },
  // 添加评论信息
  [AIM_DETAIL_POST_ADD_COMMENT]: (state, action) => {
    return { ...state, addCommentLoading: true }
  },
  [AIM_DETAIL_POST_ADD_COMMENT_SUCCEED]: (state, action) => {
    message.success('添加评论成功')
    if (action.cb) {
      action.cb()
      return state
    }
    return { ...state, addCommentLoading: false, addContent: {} }
  },
  [AIM_DETAIL_POST_ADD_COMMENT_FAILED]: (state, action) => {
    if (action.cb) {
      action.cb()
      return state
    }
    return { ...state, addCommentLoading: false }
  },
  // 获取评论信息
  [AIM_DETAIL_GET_AIM_COMMENTS]: (state, action) => {
    return { ...state, getCommentLoading: true }
  },
  [AIM_DETAIL_GET_AIM_COMMENTS_SUCCEED]: (state, action) => {
    const { aimCommentList, pagination } = action
    return { ...state, aimCommentList, pagination, getCommentLoading: false }
  },
  [AIM_DETAIL_GET_AIM_COMMENTS_FAILED]: (state, action) => {
    return { ...state, getCommentLoading: false }
  },
  // 获取点赞关注信息
  [AIM_DETAIL_GET_PRAISE_AND_ATTENTION_SUCCEED]: (state, action) => {
    const { isPraise, isWatching } = action
    return { ...state, isPraise, isWatching }
  },
  // 切换 comment 展开
  [AIM_DETAIL_TOGGLE_COMMENT_STATE]: (state, action) => {
    const { commentId, toggleState } = action
    return { ...state, commentToggleState: { ...state.commentToggleState, [commentId]: toggleState } }
  },
  // 修改点赞问题
  [AIM_DETAIL_PUT_PRAISE_AND_ATTENTION_SUCCEED]: (state, action) => {
    const { status, type } = action.payload
    return { ...state, [type === 1 ? 'isPraise' : 'isWatching']: status === 1 }
  }
})
