const { aims, user } = require('../../../model/index.js')

const fn_get = async (ctx, next) => {
  const { current = 1, pageSize = 5 } = ctx.query
  const NpageSize = Number(pageSize)
  const Ncurrent = Number(current)
  try {
    // 根据参数设置查询字段
    const lists = await aims.findAndCountAll({
      include: [ { model: user, as: 'aimUser', attributes: ['user_name', 'avatar_url', 'int_id'] } ],
      'limit': NpageSize,
      'offset': (Ncurrent - 1) * NpageSize,
      'order': [
        ['praise_counts', 'DESC'],
        ['read_counts', 'DESC']
      ]
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
