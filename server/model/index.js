const user = require('./accounts.js')
const aims = require('./aims.js')
const updateLists = require('./updateLists.js')
const comments = require('./comments.js')
const praises = require('./praises.js')
const watchings = require('./watchings.js')
const friends = require('./friends.js')

aims.belongsTo(user, { foreignKey: 'user_id', as: 'aimUser', targetKey: 'id' })
comments.belongsTo(user, { foreignKey: 'create_user', as: 'aimUser', targetKey: 'id' })
// aims.hasMany(updateLists, { foreignKey: 'aim_id', as: 'aimInfo', targetKey: 'id' })
updateLists.belongsTo(aims, { foreignKey: 'aim_id', as: 'aimInfo', targetKey: 'id' })
updateLists.belongsTo(user, { foreignKey: 'user_id', as: 'userInfo', targetKey: 'id' })
watchings.belongsTo(user, { foreignKey: 'user_id', as: 'userInfo', targetKey: 'id' })

module.exports = {
  user,
  aims,
  updateLists,
  comments,
  praises,
  watchings,
  friends
}
