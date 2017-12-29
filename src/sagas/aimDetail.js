import { call, takeEvery, put, select, fork } from 'redux-saga/effects'
import { get_aimdetail, post_aimInfo, get_aimChangelists, post_aimAddComment, get_aimCommentList } from '../actions/aimDetail_action.js'
import types from '@/types'
const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED,
  AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_POST_DETAIL_INFO_SUCCEED, AIM_DETAIL_POST_DETAIL_INFO_FAILED,
  AIM_DETAIL_GET_AIM_CHANGE_LISTS, AIM_DETAIL_GET_AIM_CHANGE_LISTS_SUCCEED, AIM_DETAIL_GET_AIM_CHANGE_LISTS_FAILED,
  AIM_DETAIL_POST_ADD_COMMENT, AIM_DETAIL_POST_ADD_COMMENT_SUCCEED, AIM_DETAIL_POST_ADD_COMMENT_FAILED,
  AIM_DETAIL_GET_AIM_COMMENTS, AIM_DETAIL_GET_AIM_COMMENTS_SUCCEED, AIM_DETAIL_GET_AIM_COMMENTS_FAILED,
  AIM_DETAIL_POST_ADD_INNER_COMMENT
} = types

// 获取aim 详情数据
export function* fetchres () {
  const aimId = yield select(({aimDetail}) => aimDetail.aimId)
  const params = { aimId }
  try {
    const data = yield call(get_aimdetail, params)
    yield put({type: AIM_DETAIL_GET_DETAIL_SUCCEED, aimDetailInfo: data.content})
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
    // const getParams = { payload: { aimId: params.aimId } }
    // yield call(fetchAimComments, getParams)
  } catch (err) {
    yield put({type: AIM_DETAIL_POST_ADD_COMMENT_FAILED, error: err, cb: cb.err})
  }
}

function* detailSaga () {
  yield takeEvery(AIM_DETAIL_GET_DETAIL, fetchres)
  yield takeEvery(AIM_DETAIL_POST_DETAIL_INFO, changeAimInfo)
  yield takeEvery(AIM_DETAIL_GET_AIM_CHANGE_LISTS, fetchUpdateRes)
  yield takeEvery(AIM_DETAIL_POST_ADD_COMMENT, addAimComment)
  yield takeEvery(AIM_DETAIL_GET_AIM_COMMENTS, fetchAimComments)
  yield takeEvery(AIM_DETAIL_POST_ADD_INNER_COMMENT, addAimInnerComment)
}

export default detailSaga
