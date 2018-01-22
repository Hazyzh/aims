const { updateLists } = require('../../../model/index.js')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// 获取
const fn_get = async (ctx, next) => {
  const { aimId } = ctx.query
  try {
    const lists = await updateLists.findAll({
      'where': {
        'aim_id': aimId,
        'aim_status': {
          [Op.ne]: '3'
        }
      }
    })

    ctx.rest(lists, '获取信息成功')
  } catch (err) {
    console.log('err', err)
    ctx.restError(-1, '获取详情信息失败，数据库异常')
  }
}

module.exports = {
  'get': fn_get
}
