const Sequelize = require('sequelize')
const sequelize = require('./root.js')

// 用户表
var user = sequelize.define('aims-account', {
  int_id: {
    type: Sequelize.BIGINT(11),
    autoIncrement: true,
    primaryKey: true
  },
  id: Sequelize.STRING(36),
  sina_id: Sequelize.STRING(20),
  wx_openid: Sequelize.STRING(32),
  user_name: Sequelize.STRING(64),
  phone_number: Sequelize.STRING(13),
  avatar_url: Sequelize.STRING(255),
  email: Sequelize.STRING(64)
}, {
  deletedAt: false,
  timestamps: true
})

module.exports = user
