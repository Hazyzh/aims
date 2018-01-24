import { call, takeEvery, put } from 'redux-saga/effects'
import { get_dynamicHandler } from '../actions/homeDynamic_action.js'
import types from '@/types'

const { HOMEDYNAMIC_GET_LIST, HOMEDYNAMIC_GET_LIST_SUCCEED, HOMEDYNAMIC_GET_LIST_FAILED } = types

export function* fetchres (action) {
  const { payload } = action
  try {
    const data = yield call(get_dynamicHandler, payload)
    const dataLists = data.content.rows
    const pagination = {
      pageSize: data.content.pageSize,
      current: data.content.current,
      total: data.content.count
    }
    yield put({type: HOMEDYNAMIC_GET_LIST_SUCCEED, dataLists, pagination})
  } catch (err) {
    yield put({type: HOMEDYNAMIC_GET_LIST_FAILED, error: err})
  }
}

function* dynamicSaga () {
  yield takeEvery(HOMEDYNAMIC_GET_LIST, fetchres)
}

export default dynamicSaga
