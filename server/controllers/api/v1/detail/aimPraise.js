const { praises, watchings, aims } = require('../../../../model/index.js')
// 获取
const fn_get = async (ctx, next) => {
  const { aimId } = ctx.query
  if (ctx.checkParams(aimId)) return ctx.restError(-1, '参数格式不对')
  const { id: userId } = ctx.userInfo
  try {
    const params = { 'aim_id': aimId, 'user_id': userId }
    const praise = await praises.findOne({
      'where': params
    })
    const watching = await watchings.findOne({
      'where': params
    })
    const res = { isPraise: !!praise && praise.status === true, isWatching: !!watching && watching.status === true }
    ctx.rest(res, '获取信息成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '获取详情信息失败，数据库异常')
  }
}
// 修改
const fn_put = async (ctx, next) => {
  const { userId, aimId, type, status } = ctx.body
  if (ctx.checkParams(type, userId, aimId, status)) return ctx.restError(-1, '参数格式不对')
  const userInfo = ctx.userInfo
  if (userInfo.id !== userId) return ctx.restError(-1, '没有权限进行此操作')
  try {
    const model = type === 1 ? praises : watchings
    const params = { 'aim_id': aimId, 'user_id': userId }
    let res
    if (status === 0) {
      res = await model.update({
        'status': status
      }, {
        where: params
      })
      // aim counts 减少
      await aims.build({id: aimId}).decrement(type === 1 ? 'praise_counts' : 'watch_counts', { where: { 'id': aimId } })
    } else {
      res = await model.findOrCreate({where: params, defaults: {status}})
      const item = res[0]
      if (!item.status) {
        item.status = 1
        await item.save()
      }
      // aim counts 增加
      await aims.increment(type === 1 ? 'praise_counts' : 'watch_counts', { where: { 'id': aimId } })
    }
    ctx.rest({type, status}, '修改成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '修改失败，数据库异常')
  }
}

module.exports = {
  'get': fn_get,
  'put': fn_put
}
