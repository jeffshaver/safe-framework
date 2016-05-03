import React, {Component} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Bar} from 'safe-framework-react-chartjs'

@Chart
class ColumnChart extends Component {
  static propTypes = {}

  render () {
    return (
      <Bar
        {...this.props}
      />
    )
  }
}

export const DefaultColumnChart = DefaultChart(ColumnChart)
