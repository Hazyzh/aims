const user = require('./accounts.js')
const aims = require('./aims.js')
const updateLists = require('./updateLists.js')
const comments = require('./comments.js')
const praises = require('./praises.js')
const watchings = require('./watchings.js')

aims.belongsTo(user, { foreignKey: 'user_id', as: 'aimUser' })
comments.belongsTo(user, { foreignKey: 'create_user', as: 'aimUser' })

module.exports = {
  user,
  aims,
  updateLists,
  comments,
  praises,
  watchings
}
