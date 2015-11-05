import React, {Component, PropTypes} from 'react'

export class DataTable extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
  };

  componentDidMount () {
    console.log(this.props.columns)
    console.log(this.props.data)
    $(this.refs.table).DataTable({
      columns: this.props.columns,
      data: this.props.data
    })
  }

  render () {
    return (
      <div>
        <table ref="table">
          <thead></thead>
          <tbody></tbody>
        </table>
      </div>
    )
  }
}