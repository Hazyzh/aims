const { friends } = require('../../../../model/index.js')

const fn_post = async (ctx, next) => {
  try {
    const { id } = ctx.body
    const userInfo = ctx.userInfo
    if (ctx.checkParams(id)) return ctx.restError(-1, '参数格式不对')

    const [s, b] = [id, userInfo.id].sort()
    const ship = await friends.create({
      s_uuid: s,
      b_uuid: b
    })
    ctx.rest(ship, '添加好友成功')
  } catch (err) {
    ctx.restError(-1, '添加好友失败')
  }
}

module.exports = {
  'post': fn_post
}
