import React, {PropTypes} from 'react'
import Radium from 'radium'

const style = {
  padding: '0 0 0 256px'
}

export const Wrapper = Radium(({children}) => (
  <div style={style}>
    {children}
  </div>
))

Wrapper.propTypes = {
  children: PropTypes.node
}