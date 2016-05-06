import React, {Component, PropTypes} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Bar} from 'safe-framework-react-chartjs'

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
        {...this.props}
      />
    )
  }
}

export const DefaultBarChart = DefaultChart(BarChart)