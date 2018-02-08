import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

// import 'antd/dist/antd.less'
import App from './router'
import './common.less'
import './components/index.less'

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

let configureStore
if (process.env.NODE_ENV === 'production') {
  configureStore = require('./store/index.pro.js').default
} else {
  configureStore = require('./store/index.dev.js').default
}
export const store = configureStore()
const render = Component => {
  if (process.env.NODE_ENV === 'production') {
    ReactDOM.render(
      <Provider store={store} >
        <Component />
      </Provider>,
      document.getElementById('app')
    )
  } else {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store} >
          <Component />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    )
  }
}

render(App)

if (module.hot) {
  module.hot.accept('./router', () => {
    console.log('app')
    render(App)
  })
}
