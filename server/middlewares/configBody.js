const checkParams = require('../util/index.js').checkParams

module.exports = () => async (ctx, next) => {
  // 配置 body
  ctx.body = ctx.request.body
  // 增加检查 params 参数函数 
  ctx.checkParams = checkParams
  await next()
}
