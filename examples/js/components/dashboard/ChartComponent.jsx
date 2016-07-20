import * as Components from 'safe-framework'
import React, {Component, PropTypes} from 'react'

const style = {
  canvas: {
    margin: '1em 0'
  },
  container: {
    height: '85%'
  }
}

export class ChartComponent extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
  }

  render () {
    const {data, metadata, type} = this.props
    const {visualizationParams: params = {}} = metadata
    const {series, type: xAxisType, xAxis = 'Value', yAxis} = params
    const xAxisScale = xAxisType !== 'timeline' ? {} : {
      time: {
        tooltipFormat: 'dddd, MMMM Do YYYY, hh:mm'
      },
      type: 'time'
    }
    const options = {
      scales: {
        xAxes: [xAxisScale],
        yAxes: [{
          scaleLabel: {
            display: false,
            labelString: ''
          }
        }]
      }
    }
    const chartData = {
      data,
      xAxis: [xAxis]
    }
    
    if (series) {
      chartData.ySeriesField = series
      chartData.ySeriesFieldName = xAxis
      chartData.ySeriesFieldValue = yAxis
    } else {
      chartData.yAxis = [{
        dataProperty: yAxis,
        label: yAxis
      }]
      options.legend = {
        display: false
      }
    }
    
    const ChartType = Components[`${type}Chart`]

    return (
      <ChartType
        containerStyle={style.container}
        data={chartData}
        options={options}
        ref={(ref) => (this._chart = ref)}
        style={style.canvas}
      />
    )
  }
}