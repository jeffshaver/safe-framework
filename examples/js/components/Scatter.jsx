import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultScatterPlot} from 'safe-framework'
import {scatterSeries, tableColumns, tableData} from '../fixtures'

class Scatter extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Scatter + Table'
          />
          <DefaultScatterPlot
            columns={tableColumns}
            data={tableData}
            series={scatterSeries}
            size={'col-xs-12 col-sm-12'}
            title={'Default Scatter Plot'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Scatter