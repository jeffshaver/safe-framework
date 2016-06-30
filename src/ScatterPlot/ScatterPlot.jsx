import {Scatter} from 'safe-framework-react-chartjs'
import Chart, {DefaultChart} from '../Chart'
import React, {Component, PropTypes} from 'react'

@Chart
export default class ScatterPlot extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object
  }

  render () {
    const {data, options} = this.props

    options.showLines = options.showLines || false

    data.datasets = data.datasets.map((dataset, index) => {
      return {
        ...dataset,
        pointBackgroundColor: dataset.backgroundColor,
        pointBorderColor: dataset.borderColor
      }
    })

    return (
      <Scatter
        ref='chart'
        {...this.props}
      />
    )
  }
}

export const DefaultScatterPlot = DefaultChart(ScatterPlot)