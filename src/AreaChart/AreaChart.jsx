import {Line} from 'safe-framework-react-chartjs'
import Chart, {DefaultChart} from '../Chart'
import React, {Component} from 'react'

@Chart
export default class AreaChart extends Component {
  static propTypes = {}

  render () {
    return (
      <Line
        ref='chart'
        {...this.props}
      />
    )
  }
}

export const DefaultAreaChart = DefaultChart(AreaChart)