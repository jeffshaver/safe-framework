import {Line} from 'safe-framework-react-chartjs'
import Chart, {DefaultChart} from '../Chart'
import React, {Component, PropTypes} from 'react'

@Chart
export default class LineChart extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render () {
    const {data} = this.props

    // Go through each dataset and add the fill property
    data.datasets = data.datasets.map((dataset) => {
      return {
        ...dataset,
        fill: false
      }
    })

    return (
      <Line
        ref='chart'
        {...this.props}
      />
    )
  }
}

export const DefaultLineChart = DefaultChart(LineChart)