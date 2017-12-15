import { createReducer } from '../util/index.js'
import types from '@/types'

const { HOME_VIEW_GET_DATALIST, HOME_VIEW_GET_DATALIST_SUCCEED, HOME_VIEW_GET_DATALIST_FAILED } = types
const initstate = {
  aimsList: [],
  pagination: {},
  getlistState: false
}

export default createReducer(initstate, {
  [HOME_VIEW_GET_DATALIST]: (state, action) => {
    return { ...state, getlistState: true }
  },
  [HOME_VIEW_GET_DATALIST_SUCCEED]: (state, action) => {
    const { aimsList, pagination } = action

    return { ...state, getlistState: false, aimsList, pagination }
  },
  [HOME_VIEW_GET_DATALIST_FAILED]: (state, action) => {
    return { ...state, getlistState: false }
  }
})
