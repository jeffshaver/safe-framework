import React, {Component, PropTypes} from 'react'
import {AgGridReact} from 'ag-grid-react'

/* global document */
/* global window */

export class DataTable extends Component {
  static propTypes = {
    autoResize: PropTypes.bool,
    checkboxColumn: PropTypes.any,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    stripeRows: PropTypes.bool
  }
  
  static defaultProps = {
    autoResize: false
  }
  
  handleResize (e) {
    if (this.autoResize) {
      this.refs.grid.api.sizeColumnsToFit()
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  headerCellRendererFunc (params) {
    const api = params.api
    const cb = document.createElement('input')
    cb.setAttribute('type', 'checkbox')
    cb.setAttribute('class', 'ag-selection-checkbox')

    const label = document.createElement('label')
    const title = document.createTextNode(params.colDef.headerName)
    const span = document.createElement('span')
    span.setAttribute('class', 'ag-cell-value')
    
    label.appendChild(cb)
    label.appendChild(span)
    label.appendChild(title)
    
    cb.addEventListener('change', function (e) {
      if (this.checked) {
        api.selectAll()
      } else {
        api.deselectAll()
      }
    })
    return label
  }
  
  tooltipRendererFunc (params) {
    let renderedValue = params.value
    
    // If there is another renderer that was saved off, call that renderer first.
    if (params.previousCellRenderer !== undefined) {
      renderedValue = params.previousCellRenderer.call(this, params)
    }
    
    return '<span title="' + renderedValue + '">' + renderedValue + '</span>'
  }

  render () {
    const {autoResize, checkboxColumn, columns, data, stripeRows} = this.props
    
    this.autoResize = autoResize
    
    let newColumns = columns
    let gridProps = {
      headerHeight: '48',
      rowHeight: '48'
    }
    
    // Go through each  column and change the tooltip
    // property to the tooltip header renderer.
    newColumns = newColumns.map((column) => {
      if (column.enableTooltip === true) {
        column.previousCellRenderer = column.cellRenderer
        column.cellRenderer = this.tooltipRendererFunc
      }
      return column
    })
    
    // Add the row striping class to every other row
    if (stripeRows === true) {
      gridProps.getRowClass = (params) => {
        if (params.rowIndex % 2 === 1) {
          return 'ag-row-colored'
        }
      }
    }
    
    // Add a new column containing the checkboxes along with header.
    if (checkboxColumn != null && checkboxColumn !== false) {
      newColumns = [Object.assign({
        checkboxSelection: true,
        headerCellRenderer: this.headerCellRendererFunc,
        headerName: '',
        suppressMovable: true,
        suppressResize: true,
        suppressSorting: true,
        width: 60
      }, checkboxColumn), ...newColumns]
      
      // Setup the grid so that it properly checks/unchecks
      Object.assign(gridProps, {
        onRowClicked: (event) => {
          const rowNode = event.node
          rowNode.setSelected(!rowNode.isSelected())
        },
        rowSelection: 'multiple',
        suppressRowClickSelection: true
        
      })
    }
    
    gridProps = Object.assign(gridProps, this.props, {
      columnDefs: newColumns,
      onGridReady: (event) => {
        if (this.autoResize) {
          event.api.sizeColumnsToFit()
        }
      },
      rowData: data
    })
    
    return (
        <div className='ag-material'>
          <AgGridReact
            ref='grid'
            {...gridProps}
          />
        </div>
    )
  }
}