import React from 'react'
import ReactDOM from 'react-dom'

const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <div>Hello World!</div>,
    MOUNT_NODE
  )
}

render()
