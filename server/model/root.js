const Sequelize = require('sequelize')
const config = require('../config/mysql.js')

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  timezone: '+08:00',
  operatorAliases: false
})

module.exports = sequelize
