import React, {Component, PropTypes} from 'react'
import {AgGridReact} from 'ag-grid-react'

/* global document */

export class DataTable extends Component {
  static propTypes = {
    columnDefs: PropTypes.array.isRequired,
    rowData: PropTypes.array.isRequired,
    showCheckboxColumn: PropTypes.bool
  }

  headerCellRendererFunc (params) {
    const api = params.api
    const cb = document.createElement('input')
    cb.setAttribute('type', 'checkbox')
    cb.setAttribute('class', 'ag-selection-checkbox')

    const eHeader = document.createElement('label')
    const eTitle = document.createTextNode(params.colDef.headerName)
    eHeader.appendChild(cb)
    eHeader.appendChild(eTitle)

    cb.addEventListener('change', function (e) {
      if (this.checked) {
        api.selectAll()
      } else {
        api.deselectAll()
      }
    })
    return eHeader
  }

  render () {
    const {columnDefs, showCheckboxColumn} = this.props
    let newColumnDefs = columnDefs
    
    if (showCheckboxColumn === true) {
      newColumnDefs = [{
        checkboxSelection: true,
        headerCellRenderer: this.headerCellRendererFunc,
        headerName: '',
        suppressSorting: true
      }, ...columnDefs]
    }
    
    return (
        <div className='ag-material'>
          <AgGridReact
            {...Object.assign({
              headerHeight: '48',
              rowHeight: '48'
            }, this.props, {
              columnDefs: newColumnDefs
            })}
          />
        </div>
    )
  }
}