const { watchings, user } = require('../../../model/index.js')

const fn_get = async (ctx, next) => {
  try {
    const { aimId } = ctx.query
    const lists = await watchings.findAll({
      include: [ { model: user, as: 'userInfo', attributes: ['avatar_url', 'int_id', 'user_name'] } ],
      'where': {
        'aim_id': aimId,
        'status': '1'
      },
      attributes: []
    })

    ctx.rest(lists, '获取关注人列表信息成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '查询失败数据库异常')
  }
}

module.exports = {
  'get': fn_get
}
