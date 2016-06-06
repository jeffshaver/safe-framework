import React, {Component} from 'react'
import {Card, CardActions, CardTitle, Paper} from 'material-ui'
import {DataTable} from 'safe-framework'
import FlatButton from 'material-ui/FlatButton'
import {tableColumns, tableData} from '../fixtures'

class Table extends Component {
  handleExport () {
    console.log('Handle export...')
    this.dataTable.exportToCSV()
  }
  
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            title='Table'
          />
          <CardActions>
            <FlatButton label='Export To CSV'
              onTouchTap={::this.handleExport}/>
          </CardActions>
          <DataTable
            checkboxColumn={true}
            columns={tableColumns}
            data={tableData}
            enableColResize='true'
            enableSorting='true'
            ref={(ref) => (this.dataTable = ref)}
          />
        </Card>
      </Paper>
    )
  }
}

export default Table