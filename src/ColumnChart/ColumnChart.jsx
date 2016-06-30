import {Bar} from 'safe-framework-react-chartjs'
import Chart, {DefaultChart} from '../Chart'
import React, {Component} from 'react'

@Chart
export default class ColumnChart extends Component {
  static propTypes = {}

  static defaultProps = {
    backgroundColorAlpha: 1
  }

  render () {
    return (
      <Bar
        ref='chart'
        {...this.props}
      />
    )
  }
}

export const DefaultColumnChart = DefaultChart(ColumnChart)