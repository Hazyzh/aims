const aims = require('../../../../model/aims.js')

const fn_get = async (ctx, next) => {
  const { current = 1, pageSize = 5 } = ctx.query
  const NpageSize = Number(pageSize)
  const Ncurrent = Number(current)
  try {
    const userInfo = ctx.userInfo
    const lists = await aims.findAndCountAll({
      'limit': NpageSize,
      'offset': (Ncurrent - 1) * NpageSize,
      'order': [
        ['id', 'DESC']
      ],
      'where': {
        'user_id': userInfo.id
      }
    })
    // 追加上请求信息
    lists.pageSize = NpageSize
    lists.current = Ncurrent
    ctx.rest(lists, '获取信息成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '查询失败数据库异常')
  }
}

module.exports = {
  'get': fn_get
}
