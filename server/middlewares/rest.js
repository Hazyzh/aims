const getData = require('../util/jwt.js').getData

/**
 * restify api 成功时候获取返回值的函数
 * @param  {any} content 返回的 payload 内容
 * @param  {string} message 返回的消息
 * @return {object}         固定属性的返回值
 */
const restifySucceed = (content, message) => ({
  code: 0,
  content,
  message
})

/**
 * restify api 失败时候获取返回值的函数
 * @param  {number} code    返回的 code 值
 * @param  {string} message 返回的消息
 * @return {object}         固定属性的返回值
 */
const restifyError = (code, message) => ({
  code,
  message
})

module.exports = {
  restify: (pathPrefix) => {
    // REST API前缀，默认为/api/:
    pathPrefix = pathPrefix || '/api/v1/'
    return async (ctx, next) => {
      // 绑定rest()方法:
      ctx.rest = (data, message) => {
        ctx.response.type = 'application/json'
        ctx.response.body = restifySucceed(data, message)
      }
      ctx.restError = (code, message) => {
        ctx.response.type = 'application/json'
        ctx.response.body = restifyError(code, message)
      }
      // 是否是REST API前缀?
      if (ctx.request.path.startsWith(pathPrefix)) {
        const { token = '' } = ctx.request.header
        const userInfo = getData(token)
        if (!userInfo) return ctx.restError(401, '用户信息认证失败')
        ctx.userInfo = userInfo
        await next()
      } else {
        await next()
      }
    }
  }
}
