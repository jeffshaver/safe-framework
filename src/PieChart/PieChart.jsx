import React, {Component} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Pie} from 'safe-framework-react-chartjs'

@Chart
class PieChart extends Component {
  static propTypes = {
    ...Chart.propTypes
  }
  
  render () {
    return (
      <Pie
        {...this.props}
      />
    )
  }
}

export const DefaultPieChart = DefaultChart(PieChart)
