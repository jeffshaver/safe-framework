import React, {Component, PropTypes} from 'react'
import 'highcharts'
import ReactHighcharts from 'react-highcharts'
import HighchartsData from 'highcharts-data'
import HighchartsDrilldown from 'highcharts-drilldown'

HighchartsData(ReactHighcharts.Highcharts)
HighchartsDrilldown(ReactHighcharts.Highcharts)

const baseConfig = {
  title: {
    text: 'Monthly Average Temperature',
    // center
    x: -20
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
    x: -20
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    valueSuffix: '°C'
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  }
}

export class LineChart extends Component {
  static propTypes = {
    drilldown: PropTypes.object,
    series: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    drilldown: {}
  }

  render () {
    const {drilldown, series, title} = this.props
    const config = {
      ...baseConfig,
      drilldown,
      series,
      title: {text: title}
    }

    return (
      <ReactHighcharts
        config={config}
        drilldown={drilldown}
        series={series}
      />
    )
  }
}