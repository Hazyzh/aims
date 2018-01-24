import { all } from 'redux-saga/effects'
import oauthSaga from './oauthSaga.js'
import detailSaga from './aimDetail.js'
import userSaga from './user.js'
import userInfoSaga from './userInfo.js'
// home 下的四个界面
import homeViewSaga from './homeView.js'
import homePopularSaga from './homePopular.js'
import homeDynamicSaga from './homeDynamic.js'
import addAimsSaga from './addAims.js'

export default function* rootSaga () {
  yield all([
    oauthSaga(),
    addAimsSaga(),
    homeViewSaga(),
    detailSaga(),
    userSaga(),
    userInfoSaga(),
    homePopularSaga(),
    homeDynamicSaga()
  ])
}
