const Sequelize = require('sequelize')
const sequelize = require('./root.js')

// 用户表
var watchings = sequelize.define('aims-watching', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  aim_id: Sequelize.INTEGER,
  user_id: Sequelize.STRING(36),
  status: Sequelize.BOOLEAN
}, {
  deletedAt: false,
  timestamps: true
})

module.exports = watchings
