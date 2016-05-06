import React, {Component, PropTypes} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Pie} from 'safe-framework-react-chartjs'

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
        {...this.props}
      />
    )
  }
}

export const DefaultPieChart = DefaultChart(PieChart)
