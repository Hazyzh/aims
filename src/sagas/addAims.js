import { call, takeEvery, put } from 'redux-saga/effects'
import { post_addHandler } from '../actions/addAims_action.js'

export function* fetchres (action) {
  const { payload } = action
  try {
    const data = yield call(post_addHandler, payload)
    yield put({type: 'ADD_AIMS_SUCCEED', data})
  } catch (err) {
    yield put({type: 'ADD_AIMS_FAILED', error: err})
  }
}

function* addAimsSaga () {
  yield takeEvery('ADD_AIMS_HANDER', fetchres)
}

export default addAimsSaga
