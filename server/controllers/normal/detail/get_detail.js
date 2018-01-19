const { aims, user } = require('../../../model/index.js')

const fn_get = async (ctx, next) => {
  const { aimId } = ctx.query
  try {
    const aim = await aims.findOne({
      include: [ { model: user, as: 'aimUser' } ],
      'where': {
        'id': aimId
      }
    })
    aim.read_counts = aim.read_counts + 1
    await aim.save()
    ctx.rest(aim, '获取信息成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '获取详情信息失败，数据库异常')
  }
}

module.exports = {
  'get': fn_get
}
