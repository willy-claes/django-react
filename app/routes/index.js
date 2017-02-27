import React from 'react'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import CoreLayout from 'App/components/CoreLayout'
import Home from './Home'
import Login from './Login'

export default () => (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
  </Route>
)
