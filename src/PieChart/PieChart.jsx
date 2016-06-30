import {Pie} from 'safe-framework-react-chartjs'
import Chart, {DefaultChart} from '../Chart'
import React, {Component, PropTypes} from 'react'

@Chart
export default class PieChart extends Component {
  static propTypes = {
    colorPalette: PropTypes.func,
    colorScale: PropTypes.string,
    data: PropTypes.object.isRequired
  }

  render () {
    const {colorPalette, colorScale, data} = this.props
    const [dataset] = data.datasets

    if (!dataset) {
      return
    }

    const {length} = dataset.data

    dataset.backgroundColor = colorPalette(length, colorScale)
    delete dataset.borderColor

    return (
      <Pie
        ref='chart'
        {...this.props}
      />
    )
  }
}

export const DefaultPieChart = DefaultChart(PieChart)