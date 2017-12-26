const fn_get = async (ctx, next) => {
  const userInfo = ctx.userInfo
  ctx.rest(userInfo, '获取信息成功')
}

module.exports = {
  'get': fn_get
}
