import React, {Component, PropTypes} from 'react'
import ReactHighcharts from 'react-highcharts'

const baseConfig = {
  chart: {
    type: 'scatter',
    zoomType: 'xy'
  },
  title: {
    text: 'Height Versus Weight of 507 Individuals by Gender'
  },
  subtitle: {
    text: 'Source: Heinz  2003'
  },
  xAxis: {
    title: {
      enabled: true,
      text: 'Height (cm)'
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
  },
  yAxis: {
    title: {
      text: 'Weight (kg)'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 100,
    y: 70,
    floating: true,
    borderWidth: 1
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)'
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x} cm, {point.y} kg'
      }
    }
  }
}

export class ScatterPlot extends Component {
  static propTypes = {
    series: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    const {series, title} = this.props
    const config = {
      ...baseConfig,
      series,
      title: {text: title}
    }

    return (
      <ReactHighcharts
        config={config}
        series={this.props.series}
      />
    )
  }
}