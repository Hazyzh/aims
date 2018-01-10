import { applyMiddleware, createStore } from 'redux'

import rootReducer from '../reducers/index.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index.js'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)

  return store
}
