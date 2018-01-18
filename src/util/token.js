let TOKEN = window.localStorage.getItem('aimsToken') || ''

// 获取 token
export const getToken = () => TOKEN

// 设置 token
export const setToken = token => {
  TOKEN = token
  window.localStorage.setItem('aimsToken', token)
}

// 退出登录状态
export const clearToken = () => {
  TOKEN = ''
  window.localStorage.removeItem('aimsToken')
}
