import React, {PropTypes} from 'react'
import Radium from 'radium'
import {large} from '../styles/mediaQueries'

const style = {
  padding: '64px 0 0 0',
  [large]: {
    padding: '64px 0 0 256px'
  }
}

export const Wrapper = Radium(({children}) => (
  <div style={style}>
    {children}
  </div>
))

Wrapper.propTypes = {
  children: PropTypes.node
}