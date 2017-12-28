/**
 * 测试参数是否存在
 * @param  {any} params 所有的项目
 * @return {bool}        返会布尔值是否有没传入的项目
 */
const checkParams = (...params) => {
  return !params.every(d => typeof d !== 'undefined')
}

exports.checkParams = checkParams
