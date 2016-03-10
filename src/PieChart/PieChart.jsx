import React, {Component, PropTypes} from 'react'
import 'highcharts'
import ReactHighcharts from 'react-highcharts'
import HighchartsData from 'highcharts-data'
import HighchartsDrilldown from 'highcharts-drilldown'

HighchartsData(ReactHighcharts.Highcharts)
HighchartsDrilldown(ReactHighcharts.Highcharts)

const baseConfig = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Browser market shares. January, 2015 to May, 2015'
  },
  subtitle: {
    text: 'Click the slices to view versions. Source: netmarketshare.com.'
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  }
}

export class PieChart extends Component {
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