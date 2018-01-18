import { call, takeEvery, put } from 'redux-saga/effects'
import { get_userBaseInfoHandler, post_addFriendsHandler } from '../actions/userInfo_action.js'
import { get_aimsHander } from '../actions/homeView_action.js'
import types from '@/types'

const {
  USERINFO_GET_BASE_INFO, USERINFO_GET_BASE_INFO_SUCCEED, USERINFO_GET_BASE_INFO_FAILED,
  USERINFO_POST_ADD_FRIEND, USERINFO_POST_ADD_FRIEND_SUCCEED, USERINFO_POST_ADD_FRIEND_FAILED,
  USERINFO_GET_AIMS_LISTS_SUCCEED, USERINFO_GET_AIMS_LISTS_FAILED
} = types
// 获取用户信息
export function* fetchres (action) {
  try {
    const params = action.payload
    const data = yield call(get_userBaseInfoHandler, params)
    const userInfo = data.content
    yield put({type: USERINFO_GET_BASE_INFO_SUCCEED, userInfo})
    yield call(getAimsList, userInfo.id)
  } catch (err) {
    yield put({type: USERINFO_GET_BASE_INFO_FAILED, error: err})
  }
}
// 增加新的好友
export function* addHander (action) {
  try {
    const params = action.payload
    const data = yield call(post_addFriendsHandler, params)

    yield put({type: USERINFO_POST_ADD_FRIEND_SUCCEED, data})
  } catch (err) {
    yield put({type: USERINFO_POST_ADD_FRIEND_FAILED, error: err})
  }
}
// 过去该用户 aims 列表事件
export function* getAimsList(userId) {
  try {
    const params = {
      userId,
      aimsState: -1
    }
    const data = yield get_aimsHander(params)
    const aimsLists = data.content.rows
    yield put({type: USERINFO_GET_AIMS_LISTS_SUCCEED, aimsLists})
  } catch (err) {
    yield put({type: USERINFO_GET_AIMS_LISTS_FAILED, error: err})
  }
}

function* userSaga () {
  yield takeEvery(USERINFO_GET_BASE_INFO, fetchres)
  yield takeEvery(USERINFO_POST_ADD_FRIEND, addHander)
}

export default userSaga
