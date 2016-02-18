import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultAreaChart} from 'safe-framework'
import {areaSeries, tableColumns, tableData} from '../fixtures'

class Area extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Area + Table'
          />
          <DefaultAreaChart
            columns={tableColumns}
            data={tableData}
            series={areaSeries}
            size={'col-xs-12 col-sm-12'}
            title={'Default Area Chart'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Area