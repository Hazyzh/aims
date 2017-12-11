import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './router'
import './common.less'

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} >
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./router', () => {
    console.log('app')
    render(App)
  })
}
