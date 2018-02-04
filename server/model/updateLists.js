const Sequelize = require('sequelize')
const sequelize = require('./root.js')

// 用户目标列表
var updateLists = sequelize.define('aims-updateList', {
  id: {
    type: Sequelize.BIGINT(11),
    autoIncrement: true,
    primaryKey: true
  },
  aim_id: Sequelize.BIGINT(11),
  user_id: Sequelize.STRING(36),
  update_content: Sequelize.STRING(255),
  is_systemInfo: Sequelize.BOOLEAN,
  aim_status: Sequelize.INTEGER
}, {
  deletedAt: false,
  timestamps: true
})

module.exports = updateLists
