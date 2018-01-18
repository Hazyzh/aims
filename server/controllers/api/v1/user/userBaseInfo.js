const { user, friends } = require('../../../../model/index.js')

const fn_get = async (ctx, next) => {
  try {
    const { id } = ctx.query
    const reqUserInfo = ctx.userInfo
    if (ctx.checkParams(id)) return ctx.restError(-1, '参数格式不对')
    const userInfo = await user.findOne({
      'where': {
        int_id: id
      }
    })
    const [s, b] = [reqUserInfo.id, userInfo.id].sort()
    let isFriend
    if (s === b) {
      isFriend = false
    } else {
      isFriend = await friends.findOne({
        'where': {
          s_uuid: s,
          b_uuid: b
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
