import { createReducer } from '../util/index.js'
import types from '@/types'

const {
  HOME_VIEW_GET_DATALIST, HOME_VIEW_GET_DATALIST_SUCCEED, HOME_VIEW_GET_DATALIST_FAILED,
  HOME_VIEW_CHANGE_AIMS_STATE
} = types
const initstate = {
  aimsList: [],
  pagination: {
    total: 0,
    current: 1,
    pageSize: 10
  },
  getlistState: false,
  aimsState: '0'
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
  },
  [HOME_VIEW_CHANGE_AIMS_STATE]: (state, action) => {
    const { aimsState } = action
    return { ...state, aimsState, getlistState: true }
  }
})
