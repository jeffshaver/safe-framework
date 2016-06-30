import {AgGridReact} from 'ag-grid-react'
import {clearfix} from '../styles/general'
import debounce from 'lodash.debounce'
import {getSvgIcon} from '../utilities'
import Minus from 'material-ui/svg-icons/content/remove'
import Plus from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField'
import titleCase from 'title-case'
import React, {Component, PropTypes} from 'react'

const style = {
  textField: {
    float: 'right'
  }
}
const csvDefaults = {
  skipHeader: false,
  skipFooters: false,
  skipGroups: false,
  allColumns: true,
  onlySelected: false
}

export class DataTable extends Component {
  static propTypes = {
    autoResize: PropTypes.bool,
    checkboxColumn: PropTypes.any,
    checkboxColumnConfig: PropTypes.object,
    childProp: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.array.isRequired,
    enableColResize: PropTypes.string,
    enableFilter: PropTypes.string,
    enableSorting: PropTypes.string,
    exportFileName: PropTypes.string,
    getNodeChildDetails: PropTypes.func,
    resizeDelay: PropTypes.number,
    stripeRows: PropTypes.bool
  }

  static defaultProps = {
    autoResize: true,
    checkboxColumn: false,
    checkboxColumnConfig: {},
    childProp: null,
    columns: null,
    enableColResize: 'true',
    enableFilter: 'true',
    enableSorting: 'true',
    exportFileName: 'table_export.csv',
    resizeDelay: 100,
    stripeRows: true
  }

  constructor (props) {
    super(props)

    this.state = {
      quickFilterText: ''
    }

    this.defaultGroupingFn = ::this.defaultGroupingFn
    this.onQuickFilterChange = ::this.onQuickFilterChange
  }

  handleResize (grid) {
    if (!this.props.autoResize) {
      return
    }

    grid.api.sizeColumnsToFit()
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state !== nextState) return true

    return this.getChangedProps(this.props, nextProps).length !== 0
  }

  componentDidMount () {
    const {grid} = this.refs
    const {resizeDelay} = this.props

    this.handleResize(grid)

    this.handleDebouncedResize = debounce(this.handleResize.bind(this, grid), resizeDelay)

    window.addEventListener('resize', this.handleDebouncedResize)
  }

  componentDidUpdate (prevProps) {
    this.handleResize(this.refs.grid)
  }

  componentWillUnmount () {
    const {grid} = this.refs

    window.removeEventListener('resize', this.handleDebouncedResize)
    grid.api.destroy()
  }

  createColumns (data) {
    const {childProp} = this.props
    const [firstItem = {}] = data

    const dataColumnKeys =
      Object.keys(firstItem).filter((field) => (
        !field.startsWith('_') && field !== childProp
      ))

    const drilldownColumnKeys =
      Object.keys((firstItem[childProp] || [])[0] || {}).filter((field) => (
        !field.startsWith('_')
      ))

    // Combine the columns names from both top level and child level fields.
    // Create a Set to eliminate duplicates.
    return [
      ...new Set([
        ...dataColumnKeys,
        ...drilldownColumnKeys
      ])]
      .map((field) => ({
        headerName: titleCase(field),
        field
      }))
  }

  getChangedProps (oldProps, newProps) {
    return Object.keys(newProps).filter((key) => {
      return newProps[key] !== oldProps[key]
    })
  }

  exportToCSV (exportParams = {}) {
    const {exportFileName} = this.props
    const {grid} = this.refs

    grid.api.exportDataAsCsv({
      fileName: exportFileName,
      ...csvDefaults,
      ...exportParams
    })
  }

  getCSV (copyParams = {}) {
    const {grid} = this.refs

    return grid.api.getDataAsCsv({
      ...csvDefaults,
      ...copyParams
    })
  }

  checkboxHeaderRendererFunc (params) {
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

  getGroupIcon (svgIcon) {
    return getSvgIcon(svgIcon, {
      style: {
        cursor: 'pointer'
      }
    })
  }

  defaultGroupingFn (rowItem) {
    const {childProp} = this.props

    if (!rowItem[childProp]) {
      return null
    }

    return {
      children: rowItem[childProp],
      group: true
    }
  }

  onQuickFilterChange (ev, value) {
    const {enableFilter} = this.props

    if (enableFilter !== 'true') return

    this.setState({
      quickFilterText: value
    })
  }

  render () {
    const {
      checkboxColumn,
      checkboxColumnConfig,
      childProp,
      columns,
      data,
      stripeRows
    } = this.props
    const {quickFilterText} = this.state
    let columnDefs = columns || this.createColumns(data)
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
        headerCellRenderer: this.checkboxHeaderRendererFunc,
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

    if (childProp) {
      gridProps.getNodeChildDetails = this.defaultGroupingFn

      // Add the cell renderer to the first column to show children.
      if (columnDefs.length > 0) {
        columnDefs = [{
          cellRenderer: 'group',
          // headerCellRenderer: this.headerCellRendererFunc,
          headerName: '',
          suppressMovable: true,
          suppressResize: true,
          suppressSorting: true,
          width: 100
        }, ...columnDefs]

        gridProps.icons = {
          groupContracted: function () {
            return this.getGroupIcon(Plus)
          }.bind(this),
          groupExpanded: function () {
            return this.getGroupIcon(Minus)
          }.bind(this)
        }
      }
    }

    gridProps = {
      ...gridProps,
      ...this.props,
      quickFilterText,
      columnDefs,
      rowData: data
    }

    return (
      <div className='ag-material'>
        <TextField
          floatingLabelText='Filter'
          name='quickFilter'
          style={style.textField}
          onChange={this.onQuickFilterChange}
        />
        <div style={clearfix} />
        <AgGridReact
          ref='grid'
          {...gridProps}
        />
      </div>
    )
  }
}