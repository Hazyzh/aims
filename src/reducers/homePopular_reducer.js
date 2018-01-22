import { createReducer } from '../util/index.js'
import types from '@/types'
// import { message } from 'antd'

const { HOMEPOPULAR_GET_LIST, HOMEPOPULAR_GET_LIST_SUCCEED, HOMEPOPULAR_GET_LIST_FAILED } = types
const initstate = {
  loading: false,
  aimsList: [],
  pagination: {
    total: 0,
    current: 1,
    pageSize: 10
  }
}

export default createReducer(initstate, {
  [HOMEPOPULAR_GET_LIST]: (state, action) => {
    return { ...state, loading: true, aimsList: [] }
  },
  [HOMEPOPULAR_GET_LIST_SUCCEED]: (state, action) => {
    const { aimsList, pagination } = action
    return { ...state, loading: false, aimsList, pagination }
  },
  [HOMEPOPULAR_GET_LIST_FAILED]: (state, action) => {
    return { ...state, loading: false, aimsList: [] }
  }
})
