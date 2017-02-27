import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-menu" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <IndexLink to="/" className="navbar-brand">Django-React</IndexLink>
      </div>
      <div className="collapse navbar-collapse" id="top-menu" />
    </div>
  </nav>
)

export default Header
