import {Bar} from 'safe-framework-react-chartjs'
import Chart, {DefaultChart} from '../Chart'
import React, {Component, PropTypes} from 'react'

@Chart
export default class BarChart extends Component {
  static propTypes = {
    backgroundColorAlpha: PropTypes.number
  }

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

export const DefaultBarChart = DefaultChart(BarChart)