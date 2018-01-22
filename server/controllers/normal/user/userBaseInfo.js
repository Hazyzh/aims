const { user, friends } = require('../../../model/index.js')

const fn_get = async (ctx, next) => {
  try {
    const { id, sid } = ctx.query
    if (ctx.checkParams(id)) return ctx.restError(-1, '参数格式不对')
    const userInfo = await user.findOne({
      'where': {
        int_id: id
      }
    })
    let isFriend

    if ((userInfo.id === sid) || !sid) {
      isFriend = false
    } else {
      isFriend = await friends.findOne({
        'where': {
          user_uuid: sid,
          follow_uuid: userInfo.id
        }
      })
    }
    userInfo.dataValues.isFriend = !!isFriend
    ctx.rest(userInfo, '获取token信息成功')
  } catch (err) {
    console.log(err)
    ctx.restError(-1, '查询信息错误')
  }
}

module.exports = {
  'get': fn_get
}
