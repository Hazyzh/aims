import { call, takeEvery, put } from 'redux-saga/effects'
import { get_popularHandler } from '../actions/homePopular_action.js'
import types from '@/types'

const { HOMEPOPULAR_GET_LIST, HOMEPOPULAR_GET_LIST_SUCCEED, HOMEPOPULAR_GET_LIST_FAILED } = types

export function* fetchres (action) {
  try {
    const { payload } = action
    const data = yield call(get_popularHandler, payload)
    const aimsList = data.content.rows
    const pagination = {
      pageSize: data.content.pageSize,
      current: data.content.current,
      total: data.content.count
    }
    yield put({type: HOMEPOPULAR_GET_LIST_SUCCEED, aimsList, pagination})
  } catch (err) {
    yield put({type: HOMEPOPULAR_GET_LIST_FAILED, error: err})
  }
}

function* popularSaga () {
  yield takeEvery(HOMEPOPULAR_GET_LIST, fetchres)
}

export default popularSaga
