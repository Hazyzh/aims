const Sequelize = require('sequelize')
const sequelize = require('./root.js')

// 用户表
var friends = sequelize.define('aims-friend', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  s_uuid: Sequelize.STRING(36),
  b_uuid: Sequelize.STRING(36)
}, {
  deletedAt: false,
  timestamps: true
})

module.exports = friends
