const Sequelize = require('sequelize')
const sequelize = require('./root.js')

// 用户目标列表
var aims = sequelize.define('aims-aim', {
  id: {
    type: Sequelize.BIGINT(11),
    autoIncrement: true,
    primaryKey: true
  },
  user_id: Sequelize.STRING(32),
  aim_title: Sequelize.STRING(64),
  aim_content: Sequelize.STRING(255),
  read_counts: Sequelize.INTEGER,
  aim_isRemind: Sequelize.BOOLEAN,
  praise_counts: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  watch_counts: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  inner_counts: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  aim_deadline: Sequelize.DATE,
  aim_status: Sequelize.INTEGER
}, {
  deletedAt: false,
  timestamps: true
})

module.exports = aims
