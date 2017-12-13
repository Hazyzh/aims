import { fetchHanlder } from './index.js'

export const addHandler = (params) => ({
  type: 'ADD_AIMS_HANDER',
  payload: params
})

export const post_addHandler = (params) => fetchHanlder('post', '/addAims', params)
