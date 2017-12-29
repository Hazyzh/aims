const user = require('./accounts.js')
const aims = require('./aims.js')
const updateLists = require('./updateLists.js')
const comments = require('./comments.js')

aims.belongsTo(user, { foreignKey: 'user_id', as: 'aimUser' })

module.exports = {
  user,
  aims,
  updateLists,
  comments
}
