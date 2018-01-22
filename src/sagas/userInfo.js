import { call, takeEvery, put, select, fork } from 'redux-saga/effects'
import { get_userBaseInfoHandler, post_addFriendsHandler, get_latesetDynamic, get_normalAimsHander } from '../actions/userInfo_action.js'
import types from '@/types'

const {
  USERINFO_GET_BASE_INFO, USERINFO_GET_BASE_INFO_SUCCEED, USERINFO_GET_BASE_INFO_FAILED,
  USERINFO_POST_ADD_FRIEND, USERINFO_POST_ADD_FRIEND_SUCCEED, USERINFO_POST_ADD_FRIEND_FAILED,
  USERINFO_GET_AIMS_LISTS_SUCCEED, USERINFO_GET_AIMS_LISTS_FAILED, USERINFO_GET_LATESET_DYNAMIC_LISTS_FAILED,
  USERINFO_GET_LATESET_DYNAMIC_LISTS_SUCCEED
} = types
// 获取用户信息
export function* fetchres (action) {
  try {
    const sid = yield select(({user}) => user.userInfo.id)
    const params = { ...action.payload, sid }
    const data = yield call(get_userBaseInfoHandler, params)
    const userInfo = data.content
    yield put({type: USERINFO_GET_BASE_INFO_SUCCEED, userInfo})
    yield fork(getAimsList, userInfo.id)
    yield fork(getLatesetDynamic, userInfo.id)
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
  console.log('get_aims_start')
  try {
    const params = {
      userId,
      aimsState: -1
    }
    const data = yield get_normalAimsHander(params)
    const aimsLists = data.content.rows
    yield put({type: USERINFO_GET_AIMS_LISTS_SUCCEED, aimsLists})
  } catch (err) {
    yield put({type: USERINFO_GET_AIMS_LISTS_FAILED, error: err})
  }
}
// 获取用户最近的动态
export function* getLatesetDynamic(userId) {
  console.log('get_lateset_dynamic')
  try {
    const params = { userId }
    const data = yield get_latesetDynamic(params)
    const dynamidLists = data.content.rows
    yield put({type: USERINFO_GET_LATESET_DYNAMIC_LISTS_SUCCEED, dynamidLists})
  } catch (err) {
    yield put({type: USERINFO_GET_LATESET_DYNAMIC_LISTS_FAILED, error: err})
  }
}

function* userSaga () {
  yield takeEvery(USERINFO_GET_BASE_INFO, fetchres)
  yield takeEvery(USERINFO_POST_ADD_FRIEND, addHander)
}

export default userSaga
