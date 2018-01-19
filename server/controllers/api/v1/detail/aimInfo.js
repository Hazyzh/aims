const { aims, updateLists } = require('../../../../model/index.js')
// 增加
const fn_post = async (ctx, next) => {
  const { updateContent, userId, aimId, aimStatus } = ctx.body
  if (ctx.checkParams(updateContent, userId, aimId, aimStatus)) return ctx.restError(-1, '参数格式不对')
  const userInfo = ctx.userInfo
  if (userInfo.id !== userId) return ctx.restError(-1, '没有权限进行此操作')
  try {
    const updateLog = await updateLists.create({
      aim_id: aimId,
      update_content: updateContent,
      aim_status: aimStatus,
      user_id: userId
    })
    // 如果不是 0 就修改 aim 的状态
    if (aimStatus !== '0') {
      await aims.update({
        aim_status: aimStatus
      }, {
        where: { id: aimId }
      })
    }
    ctx.rest(updateLog.id, '添加目标成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '创建失败,数据库发生错误.')
  }
}

module.exports = {
  'post': fn_post
}
