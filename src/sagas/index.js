import { all } from 'redux-saga/effects'
import testSaga from './test.js'
import addAimsSaga from './addAims.js'
import homeViewSaga from './homeView.js'
import detailSaga from './aimDetail.js'
import userSaga from './user.js'

export default function* rootSaga () {
  yield all([
    testSaga(),
    addAimsSaga(),
    homeViewSaga(),
    detailSaga(),
    userSaga()
  ])
}
