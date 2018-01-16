import { all } from 'redux-saga/effects'
import oauthSaga from './oauthSaga.js'
import addAimsSaga from './addAims.js'
import homeViewSaga from './homeView.js'
import detailSaga from './aimDetail.js'
import userSaga from './user.js'
import userInfoSaga from './userInfo.js'

export default function* rootSaga () {
  yield all([
    oauthSaga(),
    addAimsSaga(),
    homeViewSaga(),
    detailSaga(),
    userSaga(),
    userInfoSaga()
  ])
}
