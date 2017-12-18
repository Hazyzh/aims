import { createReducer } from '../util/index.js'
import types from '@/types'

const {
  AIM_DETAIL_GET_DETAIL, AIM_DETAIL_GET_DETAIL_SUCCEED, AIM_DETAIL_GET_DETAIL_FAILED
} = types
const initstate = {
  loading: false,
  aimId: ''
}

export default createReducer(initstate, {
  [AIM_DETAIL_GET_DETAIL]: (state, action) => {
    const { aimId } = action
    return { ...state, loading: true, aimId }
  },
  [AIM_DETAIL_GET_DETAIL_SUCCEED]: (state, action) => {
    return { ...state, loading: false }
  },
  [AIM_DETAIL_GET_DETAIL_FAILED]: (state, action) => {
    return { ...state, loading: false }
  }
})
