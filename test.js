const Sequelize = require('sequelize')
const Op = Sequelize.Op
const config = require('./server/config/mysql.js')

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

// 用户目标列表
var ships = sequelize.define('union-user', {
  id: {
    type: Sequelize.BIGINT(11),
    autoIncrement: true,
    primaryKey: true
  },
  userm: Sequelize.STRING(11),
  userf: Sequelize.STRING(255),
}, {
  deletedAt: false,
  createdAt:false,
  updatedAt: false,
  timestamps: true
})

const sql = "SELECT userf as friends FROM `union-users` WHERE userm = ? \
UNION ALL \
SELECT userm FROM `union-users` WHERE userf = ?"

const foo = async () => {
  const data = await sequelize.query(sql, {raw: false, replacements: ["houzi", 'houzi']})
  console.log(JSON.stringify(data))
  process.exit()
}

foo()
