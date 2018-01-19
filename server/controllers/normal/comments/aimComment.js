const { comments, user } = require('../../../model/index.js')

// 获取
const fn_get = async (ctx, next) => {
  const { current = 1, pageSize = 10, pid = 0, aimId } = ctx.query
  if (ctx.checkParams(aimId)) return ctx.restError(-1, '参数格式不对')
  const NpageSize = Number(pageSize)
  const Ncurrent = Number(current)
  try {
    const lists = await comments.findAndCountAll({
      'include': [ { model: user, as: 'aimUser' } ],
      'limit': NpageSize,
      'offset': (Ncurrent - 1) * NpageSize,
      'order': [
        ['id', 'DESC']
      ],
      'where': {
        pid: pid,
        aim_id: aimId
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
