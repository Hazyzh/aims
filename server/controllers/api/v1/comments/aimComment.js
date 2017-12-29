const { comments } = require('../../../../model/index.js')

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
    // 如果不是 0 就修改 aim 的状态
    ctx.rest(updateLog.id, '添加目标成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '创建失败,数据库发生错误.')
  }
}

module.exports = {
  'post': fn_post
}
