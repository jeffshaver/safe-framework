import React, {Component} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Scatter} from 'safe-framework-react-chartjs'

@Chart
class ScatterPlot extends Component {
  static propTypes = {
    ...Chart.propTypes
  }
  
  render () {
    return (
      <Scatter
        {...this.props}
      />
    )
  }
}

export const DefaultScatterPlot = DefaultChart(ScatterPlot)
