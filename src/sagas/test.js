import { delay } from 'redux-saga'
import { call, takeEvery } from 'redux-saga/effects'

export function* fetchres (action) {
  yield call(delay, 1000)
  console.log('ok')
}

function* testSaga () {
  yield takeEvery('TEST', fetchres)
}

export default testSaga
