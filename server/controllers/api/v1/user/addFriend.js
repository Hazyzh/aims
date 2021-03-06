const { friends } = require('../../../../model/index.js')

const fn_post = async (ctx, next) => {
  try {
    const { id, type } = ctx.body
    const userInfo = ctx.userInfo
    if (ctx.checkParams(id, type)) return ctx.restError(-1, '参数格式不对')
    let ship
    if (type === 1) {
      ship = await friends.create({
        user_uuid: userInfo.id,
        follow_uuid: id
      })
    } else {
      ship = await friends.destroy({
        'where': {
          user_uuid: userInfo.id,
          follow_uuid: id
        }
      })
    }

    ctx.rest(ship, '添加好友成功')
  } catch (err) {
    ctx.restError(-1, '添加好友失败')
  }
}

module.exports = {
  'post': fn_post
}
