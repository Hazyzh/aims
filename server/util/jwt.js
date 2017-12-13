const jwt = require('jsonwebtoken')
const configs = require('../config')
const { secret, options } = configs
/**
 * 根据用户信息生成 token
 * @param  {object} data 需要记录入 token 的用户信息
 * @return {stirng}      json_web_token
 */
function getToken (data) {
  let token = jwt.sign(
    data,
    secret,
    options
  )
  return token
}

/**
 * 根据 token 获取用户信息
 * @param  {string} token
 * @return {object}       之前存入的用户信息
 */
function getData (token) {
  try {
    var decoded = jwt.verify(token, secret, options)

    delete decoded.iat
    delete decoded.exp
    delete decoded.aud
    delete decoded.sub
  } catch (err) {
    return null
  }
  return decoded
}

exports.getToken = getToken
exports.getData = getData
