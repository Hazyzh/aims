import { call, takeEvery, put } from 'redux-saga/effects'
import { post_addHandler } from '../actions/addAims_action.js'
import types from '@/types'
import history from '@/util/history.js'

const { ADD_AIMS_SUCCEED, ADD_AIMS_FAILED, ADD_AIMS_HANDER } = types

export function* fetchres (action) {
  const { payload } = action
  try {
    const data = yield call(post_addHandler, payload)
    const aimId = data.content
    history.push(`/aimsDetail/${aimId}`)
    yield put({type: ADD_AIMS_SUCCEED})
  } catch (err) {
    yield put({type: ADD_AIMS_FAILED, error: err})
  }
}

function* addAimsSaga () {
  yield takeEvery(ADD_AIMS_HANDER, fetchres)
}

export default addAimsSaga
