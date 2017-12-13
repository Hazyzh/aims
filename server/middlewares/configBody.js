module.exports = () => async (ctx, next) => {
  ctx.body = ctx.request.body
  await next()
}
