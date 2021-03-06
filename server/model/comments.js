const Sequelize = require('sequelize')
const sequelize = require('./root.js')

// 用户表
var comments = sequelize.define('aims-aimComment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pid: Sequelize.INTEGER,
  aim_id: Sequelize.INTEGER,
  inner_counts: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  comment_content: Sequelize.STRING(255),
  create_user: Sequelize.STRING(36)
}, {
  deletedAt: false,
  timestamps: true
})

module.exports = comments
