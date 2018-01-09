import { take, put } from 'redux-saga/effects'
import types from '@/types'

const { USER_OAUTH_ERROR } = types
export function* OAuth(action) {
  if (action.error && action.error.code === 401) {
    yield put({type: USER_OAUTH_ERROR})
  }
}

function* testSaga () {
  while (true) {
    const action = yield take('*')
    yield OAuth(action)
  }
}

export default testSaga
