import axios from 'axios'
import { getToken } from '../util/token.js'

const Api = axios.create({
  baseURL: '/api/v1/',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
})

// 加 token
Api.interceptors.request.use(
  config => {
    config.headers.token = getToken()
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 返回信息拦截
Api.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log(2)
          break
      }
    }
    return Promise.reject(error.response.data)
  }
)

export const fetchHanlder = (method, url, params, data) => {
  if (method !== 'get' && !data) {
    data = params
    params = {}
  }

  return Api.request({
    url,
    method,
    params,
    data
  })
}

export default Api
