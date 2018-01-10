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
        redirect_uri: 'http://aims.hazyzh.com:8080/sinaOuath'
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
//
// const getInfo = (req, res) => {
//     var code = req.query.code,
//         state = req.query.state
//     // 如果没有就退出
//     if(!code || !state) {
//         res.json({
//             code: -1,
//             content: 'login err',
//             message: 'err'
//         })
//     }
//
//     var type = state.split(',')[0],
//         uri = state.split(',')[1]
//
//     if (type == 'weibo') {
//         axios('https://api.weibo.com/oauth2/access_token', {
//             method: 'post',
//             params: {
//                 client_id: AppKey,
//                 client_secret: AppSecret,
//                 grant_type: 'authorization_code',
//                 code,
//                 redirect_uri: 'http://www.hazyzh.com/oauth'
//             }
//         }).then(data=> {
//             var { access_token, uid } = data.data
//             axios('https://api.weibo.com/2/users/show.json', {
//                 params: {
//                     access_token,
//                     uid
//                 }
//             }).then(data => {
//                 var content = data.data
//                 if(!content.error) {
//                     let userInfo = {
//                         name: content.name,
//                         description: content.description,
//                         headUrl: content.profile_image_url,
//                         profileUrl: 'https://weibo.com/' + content.profile_url,
//                         userSource: type,
//                         userUID: content.id
//                     }
//
//                     let token = tokenFuc.getToken(userInfo)
//                     console.log(token, type, uri)
//                     res.cookie('token', token, { maxAge: 1000 * 3600 * 24 * 7, httpOnly: true })
//                     res.redirect(uri)
//                 } else {
//                     res.json({
//                         code: -1,
//                         content: '',
//                         message: content.error
//                     })
//                 }
//             }).catch(err => {
//                 console.log(err)
//                 res.json({
//                     code: -1,
//                     content: '',
//                     message: '用户信息信息获取失败'
//                 })
//             })
//
//         }).catch(err=> {
//             console.log(err)
//             res.json({
//                 code: -1,
//                 content: '',
//                 message: 'access_token获取失败'
//             })
//         })
//     }
//
// }
