import { call, takeEvery, put, select } from 'redux-saga/effects'
import { get_aimdetail, post_aimInfo } from '../actions/aimDetail_action.js'
import types from '@/types'

const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED,
  AIM_DETAIL_POST_DETAIL_INFO, AIM_DETAIL_POST_DETAIL_INFO_SUCCEED, AIM_DETAIL_POST_DETAIL_INFO_FAILED
} = types

// 获取数据
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

// 修改aim评论
export function* changeAimInfo(action) {
  const userId = yield select(({user}) => user.userInfo.id)
  const params = action.payload
  console.log(params)
  const newParams = {
    ...params,
    userId
  }

  try {
    const data = yield call(post_aimInfo, newParams)
    yield put({type: AIM_DETAIL_POST_DETAIL_INFO_SUCCEED, data})
  } catch (err) {
    yield put({type: AIM_DETAIL_POST_DETAIL_INFO_FAILED, error: err})
  }
}

function* detailSaga () {
  yield takeEvery(AIM_DETAIL_GET_DETAIL, fetchres)
  yield takeEvery(AIM_DETAIL_POST_DETAIL_INFO, changeAimInfo)
}

export default detailSaga
