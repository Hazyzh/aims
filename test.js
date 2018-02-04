// const Sequelize = require('sequelize')
// const Op = Sequelize.Op
// // const config = require('./server/config/mysql.js')
// const config = {
//   host: 'localhost',
//   username: 'root',
//   password: '123456',
//   database: 'hazyzh'
// }
//
// const sequelize = new Sequelize(config.database, config.username, config.password, {
//   host: config.host,
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 30000
//   },
//   timezone: '+08:00',
//   operatorAliases: false
// })
//
// // 用户目标列表
// var updateLists = sequelize.define('aims-updateList', {
//   id: {
//     type: Sequelize.BIGINT(11),
//     autoIncrement: true,
//     primaryKey: true
//   },
//   aim_id: Sequelize.BIGINT(11),
//   user_id: Sequelize.STRING(36),
//   is_systemInfo: Sequelize.BOOLEAN,
//   update_content: Sequelize.STRING(255),
//   aim_status: Sequelize.INTEGER
// }, {
//   deletedAt: false,
//   timestamps: true
// })
//
// // 用户目标列表
// var aims = sequelize.define('aims-aim', {
//   id: {
//     type: Sequelize.BIGINT(11),
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: Sequelize.STRING(32),
//   aim_title: Sequelize.STRING(64),
//   aim_content: Sequelize.STRING(255),
//   read_counts: Sequelize.INTEGER,
//   aim_isRemind: Sequelize.BOOLEAN,
//   praise_counts: {
//     type: Sequelize.INTEGER,
//     defaultValue: 0
//   },
//   watch_counts: {
//     type: Sequelize.INTEGER,
//     defaultValue: 0
//   },
//   inner_counts: {
//     type: Sequelize.INTEGER,
//     defaultValue: 0
//   },
//   aim_deadline: Sequelize.DATE,
//   aim_status: Sequelize.INTEGER
// }, {
//   deletedAt: false,
//   timestamps: true
// })
//
// const now = new Date()
// const foo = async () => {
//   const allaims = await aims.findAll({
//     attributes: ['id', 'user_id'],
//     where: {
//       'aim_status': 0,
//       'aim_deadline': {
//         [Op.lt]: now,
//       },
//       'aim_isRemind': {
//         [Op.eq]: false
//       }
//     }
//   })
//
//   if (allaims.length === 0) return
//
//   const res = allaims.map(d => d.get({type: 'plain'}))
//   const ids = allaims.map(d => d.id)
//   for(let i = 0; i< res.length; i++) {
//     await systemUpdateInfo(res[i])
//   }
//   // console.log(allaims)
//
//   await aims.update({
//     aim_isRemind: true
//   }, {
//     where: {
//       'id': ids
//     }
//   })
//   // process.exit()
// }
//
// const RemindInfo = 'aim 已经超出预计期限,要加油啦！'
// const systemUpdateInfo = async (info = {}) => {
//   try {
//     const { id, user_id } = info
//     if(!id || !user_id) return
//
//     await updateLists.create({
//       aim_id: id,
//       user_id: user_id,
//       update_content: RemindInfo,
//       is_systemInfo: true,
//       aim_status: 0
//     })
//
//   } catch(err) {
//
//   }
// }
//
// foo()
//
require('./server/timeTasks/index.js')
