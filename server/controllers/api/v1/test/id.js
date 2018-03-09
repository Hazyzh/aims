const fn_index = async (ctx, next) => {
  const { id } = ctx.params
  if (id) {
    const userInfo = ctx.userInfo
    userInfo.requestId = id
    ctx.rest(userInfo, '获取信息成功')
  } else {
    ctx.restError(-1, '必须输入id')
  }
}

module.exports = {
  'GET': fn_index
}
