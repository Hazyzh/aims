const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { aims, friends, updateLists, watchings, user } = require('../../../../model/index.js')

const fn_get = async (ctx, next) => {
  const { current = 1, pageSize = 5 } = ctx.query
  const NpageSize = Number(pageSize)
  const Ncurrent = Number(current)
  try {
    // 获取关注人物列表 最后追加自己
    const id = ctx.userInfo.id
    const relationships = await friends.findAll({
      where: {
        user_uuid: id
      },
      attributes: ['follow_uuid']
    })
    const ids = relationships.map(d => d.follow_uuid).concat(id)
    // 获取关注的 aim id列表
    const watchs = await watchings.findAll({
      where: {
        user_id: id,
        status: true
      },
      attributes: ['aim_id']
    })
    const watchAims = watchs.map(d => d.aim_id)
    // 最后查询到关于用户的最近动态
    const lists = await updateLists.findAndCountAll({
      'include': [ {
        model: aims,
        as: 'aimInfo',
        attributes: ['aim_title', 'id', 'aim_content']
      }, {
        model: user,
        as: 'userInfo',
        attributes: ['int_id', 'user_name', 'avatar_url']
      } ],
      'limit': NpageSize,
      'offset': (Ncurrent - 1) * NpageSize,
      'order': [
        ['id', 'DESC']
      ],
      'where': {
        [Op.or]: {
          [Op.and]: {
            'user_id': {
              [Op.in]: ids
            },
            'aim_status': 3
          },
          'aim_id': {
            [Op.in]: watchAims
          }
        }
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
