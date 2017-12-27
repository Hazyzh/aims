import { call, takeEvery, put, select, fork } from 'redux-saga/effects'
import { get_aimdetail, post_aimInfo, get_aimChangelists } from '../actions/aimDetail_action.js'
import types from '@/types'
const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED,
  AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_POST_DETAIL_INFO_SUCCEED, AIM_DETAIL_POST_DETAIL_INFO_FAILED,
  AIM_DETAIL_GET_AIM_CHANGE_LISTS, AIM_DETAIL_GET_AIM_CHANGE_LISTS_SUCCEED, AIM_DETAIL_GET_AIM_CHANGE_LISTS_FAILED
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

// 修改aim评论
export function* changeAimInfo(action) {
  const userId = yield select(({user}) => user.userInfo.id)
  const params = action.payload
  const newParams = {
    ...params,
    userId
  }

  try {
    const data = yield call(post_aimInfo, newParams)
    yield fork(fetchUpdateRes)
    yield put({type: AIM_DETAIL_POST_DETAIL_INFO_SUCCEED, data})
  } catch (err) {
    yield put({type: AIM_DETAIL_POST_DETAIL_INFO_FAILED, error: err})
  }
}

function* detailSaga () {
  yield takeEvery(AIM_DETAIL_GET_DETAIL, fetchres)
  yield takeEvery(AIM_DETAIL_POST_DETAIL_INFO, changeAimInfo)
  yield takeEvery(AIM_DETAIL_GET_AIM_CHANGE_LISTS, fetchUpdateRes)
}

export default detailSaga
