import {BasicDataTable} from 'safe-framework'
import {basicTableColumns, basicTableData} from '../fixtures'
import {Card, CardTitle, Paper} from 'material-ui'
import React, {Component} from 'react'

class BasicTable extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            title='Basic Table'
          />
          <BasicDataTable
            columns={basicTableColumns}
            data={basicTableData}
          />
        </Card>
      </Paper>
    )
  }
}

export default BasicTable