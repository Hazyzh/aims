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

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  )
  sagaMiddleware.run(rootSaga)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      console.log('reducers change')
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
