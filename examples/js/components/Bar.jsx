import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultBarChart} from 'safe-framework'
import {columnDrilldown, columnSeries, tableColumns, tableData} from '../fixtures'

const chartConfig = {
  legend: {
    display: false
  },
  scales: {
    xAxis: [{}],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Total percent market share'
      }
    }]
  }
}

class Bar extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Bar + Table'
          />
          <DefaultBarChart
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

export default Bar