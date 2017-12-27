const updateLists = require('../../../../model/updateLists.js')
// 获取
const fn_get = async (ctx, next) => {
  const { aimId } = ctx.query
  try {
    const lists = await updateLists.findAll({
      'where': {
        'aim_id': aimId
      }
    })

    ctx.rest(lists, '获取信息成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '获取详情信息失败，数据库异常')
  }
}
// 增加
const fn_post = async (ctx, next) => {
  const { updateContent, userId, aimId } = ctx.body
  console.log('ruru')
  if (!updateContent || !userId || !aimId) return ctx.restError(-1, '参数格式不对')
  const userInfo = ctx.userInfo
  if (userInfo.id !== userId) return ctx.restError(-1, '没有权限进行此操作')
  try {
    const updateLog = await updateLists.create({
      aim_id: aimId,
      update_content: updateContent,
      aim_status: 0
    })

    ctx.rest(updateLog.id, '添加目标成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '创建失败,数据库发生错误.')
  }
}

module.exports = {
  'post': fn_post,
  'get': fn_get
}
