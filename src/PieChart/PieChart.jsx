import {Pie} from 'safe-framework-react-chartjs'
import Chart, {DefaultChart} from '../Chart'
import React, {Component, PropTypes} from 'react'

@Chart
export default class PieChart extends Component {
  static propTypes = {
    colorPalette: PropTypes.func,
    colorScale: PropTypes.string,
    data: PropTypes.object.isRequired,
    options: PropTypes.object
  }
  
  static defaultProps = {
    options: {}
  }

  render () {
    const {colorPalette, colorScale, data, options} = this.props
    const [dataset] = data.datasets

    if (!dataset) {
      return
    }

    const {length} = dataset.data

    dataset.backgroundColor = colorPalette(length, colorScale)
    delete dataset.borderColor
    
    options.legend = {
      ...options.legend,
      display: true
    }
    delete options.scales

    return (
      <Pie
        ref='chart'
        {...this.props}
      />
    )
  }
}

export const DefaultPieChart = DefaultChart(PieChart)