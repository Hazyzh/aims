const user = require('./accounts.js')
const aims = require('./aims.js')
const updateLists = require('./updateLists.js')
const comments = require('./comments.js')
const praises = require('./praises.js')
const watchings = require('./watchings.js')
const friends = require('./friends.js')

aims.belongsTo(user, { foreignKey: 'user_id', as: 'aimUser', targetKey: 'id' })
comments.belongsTo(user, { foreignKey: 'create_user', as: 'aimUser', targetKey: 'id' })

module.exports = {
  user,
  aims,
  updateLists,
  comments,
  praises,
  watchings,
  friends
}
