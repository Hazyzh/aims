const { comments, user, aims } = require('../../../../model/index.js')

// 增加
const fn_post = async (ctx, next) => {
  const { addContent, userId, aimId, pid } = ctx.body
  if (ctx.checkParams(addContent, userId, aimId, pid)) return ctx.restError(-1, '参数格式不对')
  const userInfo = ctx.userInfo
  if (userInfo.id !== userId) return ctx.restError(-1, '没有权限进行此操作')
  try {
    const updateLog = await comments.create({
      pid: pid,
      aim_id: aimId,
      comment_content: addContent,
      create_user: userId
    })
    await aims.increment('inner_counts', { where: { 'id': aimId } })
    ctx.rest(updateLog.id, '添加评论成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '创建失败,数据库发生错误.')
  }
}
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
  'post': fn_post,
  'get': fn_get
}
