// import React from 'react'
import { Modal } from 'antd'
import { store } from '../app.js'
import history from './history.js'

const confirm = Modal.confirm

/**
 * 给某些动作增加权限，判断是否已经登录过，
 *  · 如果没登录则终端请求提示用户登录
 *  · 如果已经登录则正常执行
 * @param  {func} foo 原来要执行的函数
 * @return {any}     如果用户登录过 则正常执行流程，如果没登录则提示登录
 */
export const mustLogin = foo => () => {
  const { user: { login } } = store.getState()
  if (!login) {
    confirm({
      title: '此操作必须登录后执行',
      content: '立刻前往登录?',
      okText: '确定',
      okType: 'primary',
      cancelText: '取消',
      iconType: 'exclamation-circle',
      onOk () {
        console.log('OK')
        history.push('/login')
      }
    })
  } else {
    return foo()
  }
}
