const Sequelize = require('sequelize')
const sequelize = require('./root.js')

// 用户表
var user = sequelize.define('aims-account', {
  id: {
    type: Sequelize.STRING(36),
    primaryKey: true
  },
  wx_openid: Sequelize.STRING(32),
  user_name: Sequelize.STRING(64),
  phone_number: Sequelize.STRING(13),
  avatar_url: Sequelize.STRING(255),
  email: Sequelize.STRING(64)
}, {
    deletedAt: false
});

module.exports = user
