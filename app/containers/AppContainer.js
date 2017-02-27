import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'

const AppContainer = ({ store, routes }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
)

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
}

export default AppContainer
