import React, {Component, PropTypes} from 'react'
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui'

export class DataTable extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
  };

  render () {
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
            {this.props.columns.map((column) => (
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
          {this.props.data.map((row, i) => (
            <TableRow key={i}>
              {this.props.columns.map((column) => (
                <TableRowColumn key={row[column.data]}>{row[column.data]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}