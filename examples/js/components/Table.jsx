import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DataTable} from 'safe-framework'
import {tableColumns, tableData} from '../fixtures'

class Table extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card
          style={{height: '500px'}}>
          <CardTitle
            title='Table'
          />
           <DataTable
             checkboxSelection='true'
             columns={tableColumns}
             data={tableData}
             enableSorting='true'
             rowSelection='multiple'
             showCheckboxColumn={true}
          />
        </Card>
      </Paper>
    )
  }
}

export default Table