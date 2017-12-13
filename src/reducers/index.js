import { combineReducers } from 'redux'

import test from './testReducer.js'
import addAims from './addAims_reducer.js'

const rootReducer = combineReducers({
  test,
  addAims
})

export default rootReducer
