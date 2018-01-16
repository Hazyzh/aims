import { combineReducers } from 'redux'

import test from './testReducer.js'
import addAims from './addAims_reducer.js'
import homeView from './aimsList_reducer.js'
import aimDetail from './aimDetail_reducer.js'
import user from './user_reducer.js'
import userView from './userInfo_reducer.js'

const rootReducer = combineReducers({
  user,
  test,
  addAims,
  homeView,
  aimDetail,
  userView
})

export default rootReducer
