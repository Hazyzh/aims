import { createReducer } from '../util/index.js'
import { ADD_AIMS_SUCCEED, ADD_AIMS_FAILED, ADD_AIMS_HANDER } from '@/types'

const initstate = {
  loading: false
}

export default createReducer(initstate, {
  [ADD_AIMS_HANDER]: (state, action) => {
    return { ...state, loading: true }
  },
  [ADD_AIMS_SUCCEED]: (state, action) => {
    return { ...state, loading: false }
  },
  [ADD_AIMS_FAILED]: (state, action) => {
    return { ...state, loading: false }
  }
})
