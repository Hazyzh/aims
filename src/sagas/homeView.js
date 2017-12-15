import { call, takeEvery, put } from 'redux-saga/effects'
import { get_aimsHander } from '../actions/homeView_action.js'
import types from '@/types'

const { HOME_VIEW_GET_DATALIST, HOME_VIEW_GET_DATALIST_SUCCEED, HOME_VIEW_GET_DATALIST_FAILED } = types

export function* fetchres (action) {
  const { payload } = action
  try {
    const data = yield call(get_aimsHander, payload)
    const aimsList = data.content.rows
    const pagination = {
      pageSize: data.content.pageSize,
      current: data.content.current,
      total: data.content.count
    }
    yield put({type: HOME_VIEW_GET_DATALIST_SUCCEED, aimsList, pagination})
  } catch (err) {
    yield put({type: HOME_VIEW_GET_DATALIST_FAILED, error: err})
  }
}

function* addAimsSaga () {
  yield takeEvery(HOME_VIEW_GET_DATALIST, fetchres)
}

export default addAimsSaga
