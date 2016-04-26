import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultPieChart} from 'safe-framework'
import {pieDrilldown, pieSeries, tableColumns, tableData} from '../fixtures'

const chartConfig = {
  chart: {
    type: 'pie'
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

class Pie extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Pie + Table'
          />
          <DefaultPieChart
            chartData={pieSeries}
            chartOptions={chartConfig}
            columns={tableColumns}
            drilldown={pieDrilldown}
            size={'col-xs-12 col-sm-12'}
            tableData={tableData}
            title={'Browser market shares. January, 2015 to May, 2015'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Pie