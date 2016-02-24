import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultBarChart} from 'safe-framework'
import {columnDrilldown, columnSeries, tableColumns, tableData} from '../fixtures'

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
            columns={tableColumns}
            data={tableData}
            drilldown={columnDrilldown}
            series={columnSeries}
            size={'col-xs-12 col-sm-12'}
            title={'Default Bar Chart'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Bar