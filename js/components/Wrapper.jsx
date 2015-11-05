import React, {Component} from 'react'
import Radium from 'radium'
import {wrapper} from '../styles/general'

@Radium
export class Wrapper extends Component {
  render () {
    return (
      <div style={[wrapper]}>
        {this.props.children}
      </div>
    )
  }
}