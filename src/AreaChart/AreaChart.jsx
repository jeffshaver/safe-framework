import React, {Component} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Line} from 'safe-framework-react-chartjs'

@Chart
class AreaChart extends Component {
  static propTypes = {
    ...Chart.propTypes
  }
  
  render () {
    return (
      <Line
        {...this.props}
      />
    )
  }
}

export const DefaultAreaChart = DefaultChart(AreaChart)
