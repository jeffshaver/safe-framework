import React, {Component} from 'react'
import Chart, {DefaultChart} from '../Chart'
import {Bar} from 'safe-framework-react-chartjs'

@Chart
export default class ColumnChart extends Component {
  static propTypes = {}
  
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

export const DefaultColumnChart = DefaultChart(ColumnChart)
