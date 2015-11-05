import React, {Component} from 'react'
import Radium from 'radium'
import {ColumnChart} from './ColumnChart'

let style = {
  display: 'flex',
  flexDirection: 'column'
}

@Radium
export class Sections extends Component {
  render () {
    return (
      <div style={[style]}>
        <ColumnChart></ColumnChart>
      </div>
    )
  }
}