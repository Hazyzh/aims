import { combineReducers } from 'redux'

import test from './testReducer.js'
import addAims from './addAims_reducer.js'
import homeView from './aimsList_reducer.js'

const rootReducer = combineReducers({
  test,
  addAims,
  homeView
})

export default rootReducer
