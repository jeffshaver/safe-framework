import React, {Component, PropTypes} from 'react'
import 'highcharts'
import ReactHighcharts from 'react-highcharts'
import HighchartsData from 'highcharts-data'
import HighchartsDrilldown from 'highcharts-drilldown'

HighchartsData(ReactHighcharts.Highcharts)
HighchartsDrilldown(ReactHighcharts.Highcharts)

const baseConfig = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'US and USSR nuclear stockpiles'
  },
  subtitle: {
    text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
    'thebulletin.metapress.com</a>'
  },
  xAxis: {
    allowDecimals: false,
    labels: {
      formatter: function () {
        return this.value
      }
    }
  },
  yAxis: {
    title: {
      text: 'Nuclear weapon states'
    },
    labels: {
      formatter: function () {
        return this.value / 1000 + 'k'
      }
    }
  },
  tooltip: {
    pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
  },
  plotOptions: {
    area: {
      pointStart: 1940,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  }
}

export class AreaChart extends Component {
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