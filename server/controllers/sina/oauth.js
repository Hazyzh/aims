const user = require('../../model/accounts.js')
const getTokenFunc = require('../../util/jwt.js').getToken
const axios = require('axios')
const getAccessTokenUrl = 'https://api.weibo.com/oauth2/access_token'
const getUserInfoUrl = 'https://api.weibo.com/2/users/show.json'
const { appkey, appSecret } = require('../../config/sina.js')
const { createUuid } = require('../../util/uuid.js')
const getToken = async (ctx, next) => {
  const { code } = ctx.query
  if (ctx.checkParams(code)) return ctx.restError(-1, '参数格式不对')
  try {
    const askData = await axios(getAccessTokenUrl, {
      method: 'post',
      params: {
        client_id: appkey,
        client_secret: appSecret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://aims.hazyzh.com/sinaOuath'
      }
    })
    const { access_token, uid } = askData.data
    const userInfo = await axios(getUserInfoUrl, {
      params: {
        access_token,
        uid
      }
    })
    const { id, name, profile_image_url } = userInfo.data
    const users = await user.findOrCreate({
      'where': {
        sina_id: id + ''
      },
      defaults: {
        id: createUuid(),
        sina_id: id + '',
        user_name: name,
        avatar_url: profile_image_url
      }
    })
    // console.log(users)
    const token = getTokenFunc(users[0].dataValues)
    ctx.rest(token, '获取token信息成功')
  } catch (err) {
    console.log(err)
    ctx.restError(-1, '获取信息失败')
  }
}

module.exports = {
  'GET': getToken
}
