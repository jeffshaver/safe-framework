import React, {Component} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Line} from 'safe-framework-react-chartjs'

@Chart
export default class AreaChart extends Component {
  static propTypes = {}

  render () {
    return (
      <Line
        {...this.props}
      />
    )
  }
}

export const DefaultAreaChart = DefaultChart(AreaChart)
