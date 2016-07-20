import changeCase from 'change-case'
import {DataTable} from 'safe-framework'
import React, {Component, PropTypes} from 'react'

export class TableComponent extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    const {data, name} = this.props

    return (
      <DataTable
        data={data}
        enableColResize='true'
        enableSorting='true'
        exportFileName={`${changeCase.pascalCase(name)}.csv`}
        ref={(ref) => (this._table = ref)}
      />
    )
  }
}