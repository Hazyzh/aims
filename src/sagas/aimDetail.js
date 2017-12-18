import { call, takeEvery, put, select } from 'redux-saga/effects'
import { get_aimdetail } from '../actions/aimDetail_action.js'
import types from '@/types'

const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED
} = types

// 获取数据
export function* fetchres () {
  const aimId = yield select(({aimDetail}) => aimDetail.aimId)
  const params = { aimId }
  try {
    const data = yield call(get_aimdetail, params)
    yield put({type: AIM_DETAIL_GET_DETAIL_SUCCEED, data})
  } catch (err) {
    yield put({type: AIM_DETAIL_GET_DETAIL_FAILED, error: err})
  }
}

function* detailSaga () {
  yield takeEvery(AIM_DETAIL_GET_DETAIL, fetchres)
}

export default detailSaga
