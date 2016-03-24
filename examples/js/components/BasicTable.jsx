import {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {BasicDataTable} from 'safe-framework'
import {basicTableColumns, basicTableData} from '../fixtures'

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