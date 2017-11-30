import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/index.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index.js'

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  diff: true,
  collapsed: true
})

let store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    sagaMiddleware
  )
)

sagaMiddleware.run(rootSaga)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/index.js')
    store.replaceReducer(nextRootReducer)
  })
}

export default store
