const { updateLists, aims, user } = require('../../../model/index.js')

const fn_get = async (ctx, next) => {
  try {
    const { userId } = ctx.query
    const NpageSize = 5
    const Ncurrent = 1
    if (ctx.checkParams(userId)) return ctx.restError(-1, '参数格式不对')
    const lists = await updateLists.findAndCountAll({
      include: [  {
        model: aims,
        as: 'aimInfo',
        attributes: ['aim_title', 'id', 'aim_content']
      }, {
        model: user,
        as: 'userInfo',
        attributes: ['int_id', 'user_name', 'avatar_url']
      }  ],
      'limit': NpageSize,
      'offset': (Ncurrent - 1) * NpageSize,
      'order': [
        ['id', 'DESC']
      ],
      'where': {
        user_id: userId
      }
    })
    lists.pageSize = NpageSize
    lists.current = Ncurrent
    ctx.rest(lists, '获取最近动态成功')
  } catch (err) {
    console.log(err)
    ctx.restError(-1, '查询信息错误')
  }
}

module.exports = {
  'get': fn_get
}
