import React, {Component, PropTypes} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Scatter} from 'safe-framework-react-chartjs'

@Chart
class ScatterPlot extends Component {
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
        {...this.props}
      />
    )
  }
}

export const DefaultScatterPlot = DefaultChart(ScatterPlot)
