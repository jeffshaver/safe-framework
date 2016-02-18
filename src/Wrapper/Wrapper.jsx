import React, {Component, PropTypes} from 'react'
import Radium from 'radium'
import {wrapper} from '../styles/general'

@Radium
export class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const {children} = this.props

    return (
      <div style={[wrapper]}>
        {children}
      </div>
    )
  }
}