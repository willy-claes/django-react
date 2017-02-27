import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'App/reducers'
import rootSaga from 'App/sagas'

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware) // eslint-disable-line comma-dangle
  )

  sagaMiddleware.run(rootSaga)

  return store
}
