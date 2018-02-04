const Sequelize = require('sequelize')
const Op = Sequelize.Op
const schedule = require('node-schedule')
const { aims, updateLists } = require('../model/index.js')
const colors = require('colors')

const RemindInfo = 'aim 已经超出预计期限,要加油啦！'
/**
 * 给超时的任务加系统提示信息
 * @param  {Object}  [info={}] [包含id和userid]
 * @return {Promise}           [description]
 */
const systemUpdateInfo = async (info = {}) => {
  try {
    const { id, user_id } = info
    if (!id || !user_id) return
    await updateLists.create({
      aim_id: id,
      user_id: user_id,
      update_content: RemindInfo,
      is_systemInfo: true,
      aim_status: 0
    })
  } catch (err) {
    console.log(err)
  }
}

const now = new Date()
/**
 * 每天凌晨1点执行任务 查询超时而且未被提醒的aims 然后发出提醒
 * @return {Promise} [description]
 */
const checkDeadline = async () => {
  const allaims = await aims.findAll({
    attributes: ['id', 'user_id'],
    where: {
      'aim_status': 0,
      'aim_deadline': {
        [Op.lt]: now
      },
      'aim_isRemind': {
        [Op.eq]: false
      }
    }
  })
  if (allaims.length === 0) return

  const res = allaims.map(d => d.get({type: 'plain'}))
  const ids = allaims.map(d => d.id)
  for (let i = 0; i < res.length; i++) {
    await systemUpdateInfo(res[i])
  }

  await aims.update({
    aim_isRemind: true
  }, {
    where: {
      'id': ids
    }
  })
}

const taskConfig = {
  hour: 1, minute: 0
}
schedule.scheduleJob(taskConfig, checkDeadline)

const { hour, minute } = taskConfig
const fmt = n => n.toString().padStart(2, '0')
const logs = `⏰ ==> 启动定时任务，每天 ${fmt(hour)} 点 ${fmt(minute)} 分，开启查询超时提醒任务!`
console.log(colors.rainbow(logs))
