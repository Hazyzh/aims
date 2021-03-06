import { call, takeEvery, put, select, fork } from 'redux-saga/effects'
import {
  get_aimdetail, post_aimInfo, get_aimChangelists, post_aimAddComment, get_aimCommentList, get_praiseAddAttention, put_praiseAddAttention,
  get_aimWatchings
} from '../actions/aimDetail_action.js'
import { message } from 'antd'
import types from '@/types'
const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED,
  AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_POST_DETAIL_INFO_SUCCEED, AIM_DETAIL_POST_DETAIL_INFO_FAILED,
  AIM_DETAIL_GET_AIM_CHANGE_LISTS, AIM_DETAIL_GET_AIM_CHANGE_LISTS_SUCCEED, AIM_DETAIL_GET_AIM_CHANGE_LISTS_FAILED,
  AIM_DETAIL_POST_ADD_COMMENT, AIM_DETAIL_POST_ADD_COMMENT_SUCCEED, AIM_DETAIL_POST_ADD_COMMENT_FAILED,
  AIM_DETAIL_GET_AIM_COMMENTS, AIM_DETAIL_GET_AIM_COMMENTS_SUCCEED, AIM_DETAIL_GET_AIM_COMMENTS_FAILED,
  AIM_DETAIL_POST_ADD_INNER_COMMENT, AIM_DETAIL_GET_PRAISE_AND_ATTENTION, AIM_DETAIL_GET_PRAISE_AND_ATTENTION_SUCCEED,
  AIM_DETAIL_GET_PRAISE_AND_ATTENTION_FAILED, AIM_DETAIL_PUT_PRAISE_AND_ATTENTION, AIM_DETAIL_PUT_PRAISE_AND_ATTENTION_SUCCEED,
  AIM_DETAIL_PUT_PRAISE_AND_ATTENTION_FAILED, AIM_DETAIL_GET_WATCHINGS_LIST_SUCCEED
} = types

// 获取aim 详情数据
export function* fetchres () {
  const aimId = yield select(({aimDetail}) => aimDetail.aimId)
  const params = { aimId }
  try {
    const data = yield call(get_aimdetail, params)
    yield put({type: AIM_DETAIL_GET_DETAIL_SUCCEED, aimDetailInfo: data.content})
    if (data.content.aim_status !== 0) {
      const listRes = yield call(get_aimWatchings, params)
      yield put({type: AIM_DETAIL_GET_WATCHINGS_LIST_SUCCEED, watchingUsers: listRes.content.map(d => d.userInfo)})
    }
  } catch (err) {
    yield put({type: AIM_DETAIL_GET_DETAIL_FAILED, error: err})
  }
}
// 获取 aim 更新列表数据
export function* fetchUpdateRes () {
  const aimId = yield select(({aimDetail}) => aimDetail.aimId)
  const params = { aimId }
  try {
    const data = yield call(get_aimChangelists, params)
    yield put({type: AIM_DETAIL_GET_AIM_CHANGE_LISTS_SUCCEED, aimDetailChangeList: data.content})
  } catch (err) {
    yield put({type: AIM_DETAIL_GET_AIM_CHANGE_LISTS_FAILED, error: err})
  }
}
// 修改aim进程
export function* changeAimInfo(action) {
  const userId = yield select(({user}) => user.userInfo.id)
  const params = action.payload
  const newParams = {
    ...params,
    userId
  }

  try {
    const data = yield call(post_aimInfo, newParams)
    const aim_status = newParams.aimStatus
    yield fork(fetchUpdateRes)
    yield put({type: AIM_DETAIL_POST_DETAIL_INFO_SUCCEED, data, aim_status})
  } catch (err) {
    yield put({type: AIM_DETAIL_POST_DETAIL_INFO_FAILED, error: err})
  }
}
// 获取 aim 评论
export function* fetchAimComments (action) {
  const params = action.payload
  try {
    const data = yield call(get_aimCommentList, params)
    const aimCommentList = data.content.rows
    const pagination = {
      pageSize: data.content.pageSize,
      current: data.content.current,
      total: data.content.count
    }
    yield put({type: AIM_DETAIL_GET_AIM_COMMENTS_SUCCEED, aimCommentList, pagination})
  } catch (err) {
    yield put({type: AIM_DETAIL_GET_AIM_COMMENTS_FAILED, error: err})
  }
}
// 添加 aim 评论
export function* addAimComment(action) {
  const userId = yield select(({user}) => user.userInfo.id)
  const params = action.payload
  const newParams = {
    ...params,
    userId
  }

  try {
    const data = yield call(post_aimAddComment, newParams)
    yield put({type: AIM_DETAIL_POST_ADD_COMMENT_SUCCEED, data})
    // 获取评论列表
    const getParams = { payload: { aimId: params.aimId } }
    yield call(fetchAimComments, getParams)
  } catch (err) {
    yield put({type: AIM_DETAIL_POST_ADD_COMMENT_FAILED, error: err})
  }
}
// 添加 aim 内部评论
export function* addAimInnerComment(action) {
  const userId = yield select(({user}) => user.userInfo.id)
  const { pid, aimId, cb, addContent } = action.payload
  const newParams = { userId, pid, aimId, addContent }
  try {
    const data = yield call(post_aimAddComment, newParams)
    yield put({type: AIM_DETAIL_POST_ADD_COMMENT_SUCCEED, data, cb: cb.ok})
    // 获取评论列表
    const getParams = { payload: { aimId } }
    yield call(fetchAimComments, getParams)
  } catch (err) {
    yield put({type: AIM_DETAIL_POST_ADD_COMMENT_FAILED, error: err, cb: cb.err})
  }
}
// 获取赞和关注信息
export function* getPraiseAndAttention(action) {
  const { aimId } = action.payload
  const newParams = { aimId }
  try {
    const login = yield select(({user}) => user.login)
    if (!login) {
      yield put({type: AIM_DETAIL_GET_PRAISE_AND_ATTENTION_SUCCEED, isPraise: false, isWatching: false})
    } else {
      const data = yield call(get_praiseAddAttention, newParams)
      const { isPraise, isWatching } = data.content
      yield put({type: AIM_DETAIL_GET_PRAISE_AND_ATTENTION_SUCCEED, isPraise, isWatching})
    }
  } catch (err) {
    yield put({type: AIM_DETAIL_GET_PRAISE_AND_ATTENTION_FAILED, error: err})
  }
}
// 修改赞和关注信息
export function* putPraiseAndAttention(action) {
  const { actionType: type } = action.payload
  const userId = yield select(({user}) => user.userInfo.id)
  const { aimId, isPraise, isWatching, aimDetailInfo: { aim_status } } = yield select(({aimDetail}) => aimDetail)
  let status
  if (type === 1) {
    status = isPraise ? 0 : 1
  } else {
    if (aim_status !== 0) {
      message.warning('aim 状态已经不是进行中，不可更改关注信息。')
      return
    }
    status = isWatching ? 0 : 1
  }
  const params = { userId, aimId, type, status }
  try {
    const data = yield call(put_praiseAddAttention, params)
    yield put({type: AIM_DETAIL_PUT_PRAISE_AND_ATTENTION_SUCCEED, payload: { ...data.content }})
    if (type === 2) {
      yield fork(fetchres)
    }
  } catch (err) {
    yield put({type: AIM_DETAIL_PUT_PRAISE_AND_ATTENTION_FAILED, error: err})
  }
}
function* detailSaga () {
  yield takeEvery(AIM_DETAIL_GET_DETAIL, fetchres)
  yield takeEvery(AIM_DETAIL_POST_DETAIL_INFO, changeAimInfo)
  yield takeEvery(AIM_DETAIL_GET_AIM_CHANGE_LISTS, fetchUpdateRes)
  yield takeEvery(AIM_DETAIL_POST_ADD_COMMENT, addAimComment)
  yield takeEvery(AIM_DETAIL_GET_AIM_COMMENTS, fetchAimComments)
  yield takeEvery(AIM_DETAIL_POST_ADD_INNER_COMMENT, addAimInnerComment)
  yield takeEvery(AIM_DETAIL_GET_PRAISE_AND_ATTENTION, getPraiseAndAttention)
  yield takeEvery(AIM_DETAIL_PUT_PRAISE_AND_ATTENTION, putPraiseAndAttention)
}

export default detailSaga
