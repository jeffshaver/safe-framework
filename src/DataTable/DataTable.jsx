import React, {Component, PropTypes} from 'react'
import {AgGridReact} from 'ag-grid-react'
import debounce from 'lodash.debounce'

/* global document */
/* global window */

export class DataTable extends Component {
  static propTypes = {
    autoResize: PropTypes.bool,
    checkboxColumn: PropTypes.any,
    checkboxColumnConfig: PropTypes.object,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    resizeDelay: PropTypes.number,
    stripeRows: PropTypes.bool
  }

  static defaultProps = {
    autoResize: true,
    checkboxColumn: false,
    checkboxColumnConfig: {},
    resizeDelay: 100,
    stripeRows: true
  }

  handleResize (grid) {
    if (!this.props.autoResize) {
      return
    }

    grid.api.sizeColumnsToFit()
  }

  componentDidMount () {
    const {grid} = this.refs
    const {resizeDelay} = this.props

    this.handleResize(grid)

    this.handleResize = debounce(this.handleResize.bind(this, grid), resizeDelay)

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    const {grid} = this.refs

    window.removeEventListener('resize', this.handleResize)
    grid.api.destroy()
  }

  headerCellRendererFunc (params) {
    const {api} = params
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

        return
      }

      api.deselectAll()
    })

    return label
  }

  tooltipRenderer (params) {
    let renderedValue = params.value

    // If there is another renderer that was saved off, call that renderer first.
    if (params.previousCellRenderer !== undefined) {
      renderedValue = params.previousCellRenderer.call(this, params)
    }

    return `<span title="${renderedValue}">${renderedValue}</span>`
  }

  render () {
    const {
      checkboxColumn, checkboxColumnConfig, columns, data, stripeRows
    } = this.props

    let columnDefs = columns
    let gridProps = {
      headerHeight: '48',
      rowHeight: '48'
    }

    // Go through each  column and change the tooltip
    // property to the tooltip header renderer.
    columnDefs = columnDefs.map((column) => {
      if (column.enableTooltip === true) {
        column.previousCellRenderer = column.cellRenderer
        column.cellRenderer = this.tooltipRenderer
      }

      return column
    })

    // Add the row striping class to every other row
    if (stripeRows === true) {
      gridProps.getRowClass = (params) => {
        return params.rowIndex % 2 === 1 ? 'ag-row-colored' : ''
      }
    }

    // Add a new column containing the checkboxes along with header.
    if (checkboxColumn) {
      columnDefs = [{
        ...checkboxColumnConfig,
        checkboxSelection: true,
        headerCellRenderer: this.headerCellRendererFunc,
        headerName: '',
        suppressMovable: true,
        suppressResize: true,
        suppressSorting: true,
        width: 60
      }, ...columnDefs]

      // Setup the grid so that it properly checks/unchecks
      gridProps = {
        ...gridProps,
        onRowClicked: (event) => {
          const rowNode = event.node
          rowNode.setSelected(!rowNode.isSelected())
        },
        rowSelection: 'multiple',
        suppressRowClickSelection: true
      }
    }

    gridProps = {
      ...gridProps,
      ...this.props,
      columnDefs,
      rowData: data
    }

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