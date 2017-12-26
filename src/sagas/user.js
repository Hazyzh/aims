import { call, takeEvery, put } from 'redux-saga/effects'
import { get_userInfoHandler } from '../actions/user_action.js'
import types from '@/types'

const { USER_GET_USER_INFO, USER_GET_USER_INFO_SUCCEED, USER_GET_USER_INFO_FAILED } = types

export function* fetchres () {
  try {
    const data = yield call(get_userInfoHandler)
    const userInfo = data.content
    yield put({type: USER_GET_USER_INFO_SUCCEED, userInfo})
  } catch (err) {
    yield put({type: USER_GET_USER_INFO_FAILED, error: err})
  }
}

function* userSaga () {
  yield takeEvery(USER_GET_USER_INFO, fetchres)
}

export default userSaga
