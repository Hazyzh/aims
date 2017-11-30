import { all } from 'redux-saga/effects'
import testSaga from './test.js'

export default function* rootSaga () {
  yield all([
    testSaga()
  ])
}
