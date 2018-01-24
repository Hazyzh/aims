import { combineReducers } from 'redux'

import test from './testReducer.js'
import aimDetail from './aimDetail_reducer.js'
import user from './user_reducer.js'
import userView from './userInfo_reducer.js'
// home view
import addAims from './addAims_reducer.js'
import homeView from './aimsList_reducer.js'
import homePopular from './homePopular_reducer.js'
import homeDynamic from './homeDynamic_reducer.js'

const rootReducer = combineReducers({
  user,
  test,
  addAims,
  homeView,
  aimDetail,
  userView,
  homePopular,
  homeDynamic
})

export default rootReducer
