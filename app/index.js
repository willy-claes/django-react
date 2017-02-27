import React from 'react'
import ReactDOM from 'react-dom'

import createStore from 'App/store'
import createRoutes from 'App/routes'
import AppContainer from 'App/containers/AppContainer'

const initialState = typeof window.__INITIAL_STATE__ === 'string' ?
  JSON.parse(window.__INITIAL_STATE__) : window.__INITIAL_STATE__
const store = createStore(initialState)
const routes = createRoutes(store)

const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE // eslint-disable-line comma-dangle
  )
}

render()
