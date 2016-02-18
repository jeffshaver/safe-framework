import React, {Component, PropTypes} from 'react'
import Radium from 'radium'
import {wrapper} from '../styles/general'

@Radium
export class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.array
  };

  render () {
    return (
      <div style={[wrapper]}>
        {this.props.children}
      </div>
    )
  }
}