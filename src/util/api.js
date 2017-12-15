import axios from 'axios'
import { getToken } from './token.js'
import { message } from 'antd'

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
      message.error(response.data.message)
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
/**
 * 封装的 resfapi 请求方法
 * @param  {string} method 方法类型
 * @param  {string} url    请求地址
 * @param  {object} params params 参数
 * @param  {object} data   data 参数如果不是 get 请求, 还没有穿传入 data 参数则 params 为 data
 * @return {object}        ajax 请求的 promise 对象
 */
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
