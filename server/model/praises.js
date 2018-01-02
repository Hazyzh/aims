const Sequelize = require('sequelize')
const sequelize = require('./root.js')

// 用户表
var praises = sequelize.define('aims-praise', {
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

module.exports = praises
