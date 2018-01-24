import { createReducer } from '../util/index.js'
import types from '@/types'

const {
  HOMEDYNAMIC_GET_LIST, HOMEDYNAMIC_GET_LIST_SUCCEED, HOMEDYNAMIC_GET_LIST_FAILED
} = types
const initstate = {
  dynamicList: [],
  pagination: {
    total: 0,
    current: 1,
    pageSize: 10
  },
  loading: false
}

export default createReducer(initstate, {
  [HOMEDYNAMIC_GET_LIST]: (state, action) => {
    let dynamicList = state.dynamicList
    if (action.initSearch) {
      dynamicList = []
    }
    return { ...state, loading: true, dynamicList }
  },
  [HOMEDYNAMIC_GET_LIST_SUCCEED]: (state, action) => {
    const { dataLists, pagination } = action
    const { dynamicList } = state
    return {
      ...state,
      loading: false,
      dynamicList: [...dynamicList, ...dataLists],
      pagination
    }
  },
  [HOMEDYNAMIC_GET_LIST_FAILED]: (state, action) => {
    return { ...state, loading: false }
  }
})
