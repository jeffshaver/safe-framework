import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultColumnChart} from 'safe-framework'
import {columnDrilldown, columnSeries, tableColumns, tableData} from '../fixtures'

const chartConfig = {
  subtitle: {
    text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [{}],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Total percent market share'
      }
    }]
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  }
}

class Column extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Column + Table'
          />
          <DefaultColumnChart
            chartData={columnSeries}
            chartOptions={chartConfig}
            columns={tableColumns}
            drilldown={columnDrilldown}
            size={'col-xs-12 col-sm-12'}
            tableData={tableData}
            title={'Browser market shares. January, 2015 to May, 2015'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Column