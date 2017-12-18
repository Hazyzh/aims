import { call, takeEvery, put, select, fork } from 'redux-saga/effects'
import { get_aimsHander } from '../actions/homeView_action.js'
import types from '@/types'

const {
  HOME_VIEW_GET_DATALIST, HOME_VIEW_GET_DATALIST_SUCCEED, HOME_VIEW_GET_DATALIST_FAILED,
  HOME_VIEW_CHANGE_AIMS_STATE
} = types

// 分页获取数据
export function* fetchres (action) {
  const { payload } = action
  const aimsState = yield select(state => state.homeView.aimsState)
  payload.aimsState = aimsState
  try {
    const data = yield call(get_aimsHander, payload)
    const aimsList = data.content.rows
    const pagination = {
      pageSize: data.content.pageSize,
      current: data.content.current,
      total: data.content.count
    }
    yield put({type: HOME_VIEW_GET_DATALIST_SUCCEED, aimsList, pagination})
  } catch (err) {
    yield put({type: HOME_VIEW_GET_DATALIST_FAILED, error: err})
  }
}

// 条件改变获取数据
export function* stateFetchres(action) {
  yield fork(fetchres, { payload: {} })
}

function* addAimsSaga () {
  yield takeEvery(HOME_VIEW_GET_DATALIST, fetchres)
  yield takeEvery(HOME_VIEW_CHANGE_AIMS_STATE, stateFetchres)
}

export default addAimsSaga
