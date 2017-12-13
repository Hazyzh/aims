const user = require('../model/accounts.js')
const getTokenFunc = require('../util/jwt.js').getToken

const getToken = async (ctx, next) => {
  try {
    const users = await user.findAll({
      'limit': 1
    })
    const token = getTokenFunc(users[0].dataValues)
    ctx.rest(token, '获取token信息成功')
  } catch (err) {
    ctx.restError(-1, '查询信息错误')
  }
}

module.exports = {
  'GET': getToken
}
