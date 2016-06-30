import {DefaultPieChart} from 'safe-framework'
import {Card, CardTitle, Paper} from 'material-ui'
import {pieDrilldown, pieSeries, tableColumns, tableData} from '../fixtures'
import React, {Component} from 'react'

const chartConfig = {}

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