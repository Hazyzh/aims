const aims = require('../../../model/aims.js')
const moment = require('moment')

const fn_post = async (ctx, next) => {
  const { content, title, deadline } = ctx.body
  console.log('ruru')
  if (!title || !content || !deadline) return ctx.restError(-1, '参数格式不对')
  try {
    const userInfo = ctx.userInfo
    const aim = await aims.create({
      user_id: userInfo.id,
      aim_title: title,
      aim_content: content,
      aim_deadline: moment(deadline + ' 23:59:59'),
      aim_status: 0
    })

    ctx.rest(aim.id, '添加目标成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '创建失败,数据库发生错误.')
  }
}

module.exports = {
  'post': fn_post
}
