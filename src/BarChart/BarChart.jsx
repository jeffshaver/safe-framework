import React, {Component} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Bar} from 'safe-framework-react-chartjs'

@Chart
export default class BarChart extends Component {
  static propTypes = {
    ...Chart.propTypes
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
