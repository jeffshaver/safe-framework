import React, {Component, PropTypes} from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui'

export class BasicDataTable extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
  }

  render () {
    const {columns, data} = this.props

    return (
      <Table
        fixedHeader={false}
        height={'343px'}
      >
        <TableHeader
          adjustForCheckbox={false}
          displaySelectAll={false}
        >
          <TableRow>
            {columns.map((column) => (
              <TableHeaderColumn key={column.title}>{column.title}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={false}
          displayRowCheckbox={false}
          preScanRows={false}
          showRowHover={true}
          stripedRows={true}
        >
          {data.map((row, i) => (
            <TableRow key={i}>
              {columns.map((column) => (
                <TableRowColumn key={row[column.data]}>{row[column.data]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}