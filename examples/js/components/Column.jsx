import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultColumnChart} from 'safe-framework'
import {columnDrilldown, columnSeries, tableColumns, tableData} from '../fixtures'

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
            columns={tableColumns}
            data={tableData}
            drilldown={columnDrilldown}
            series={columnSeries}
            size={'col-xs-12 col-sm-12'}
            title={'Default Column Chart'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Column