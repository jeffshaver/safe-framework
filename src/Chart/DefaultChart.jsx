import React, {Component, PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui'
import DataTable from '../DataTable'

export default (ChartElement) => class DefaultChart extends Component {
  static propTypes = {
    chartData: PropTypes.any.isRequired,
    chartOptions: PropTypes.object,
    columns: PropTypes.array.isRequired,
    drilldown: PropTypes.object,
    size: PropTypes.string,
    tableData: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }
  
  static defaultProps = {
    drilldown: {},
    size: '',
    title: null
  }

  render () {
    const {
      chartData, chartOptions, columns, drilldown, size, tableData, title
    } = this.props

    return (
      <div className={size}>
        <Tabs>
          <Tab label='Chart'>
            <ChartElement
              data={chartData}
              drilldown={drilldown}
              options={chartOptions}
              title={title}
            />
          </Tab>
          <Tab label='Data'>
            <DataTable
              columns={columns}
              data={tableData}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
}