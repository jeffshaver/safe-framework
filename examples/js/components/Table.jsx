import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DataTable} from 'safe-framework'
import {tableColumns, tableData} from '../fixtures'

class Table extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            title='Table'
          />
           <DataTable
             checkboxColumn={true}
             columns={tableColumns}
             data={tableData}
             enableColResize='true'
             enableSorting='true'
          />
        </Card>
      </Paper>
    )
  }
}

export default Table