import React, {Component, PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui'
import DataTable from '../DataTable'

export default (ChartElement) => class DefaultChart extends Component {
  static propTypes = {
    chartData: PropTypes.any.isRequired,
    chartOptions: PropTypes.object,
    chartStyle: PropTypes.object,
    columns: PropTypes.array.isRequired,
    drilldown: PropTypes.object,
    size: PropTypes.string,
    tableData: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }
  
  static defaultProps = {
    chartStyle: {
      height: '75%'
    },
    drilldown: {},
    size: '',
    title: null
  }

  render () {
    const {
      chartData, chartOptions, chartStyle, columns, drilldown, size, tableData, title
    } = this.props

    return (
      <div className={size}>
        <Tabs>
          <Tab label='Chart'>
            <div style={chartStyle}>
              <ChartElement
                data={chartData}
                drilldown={drilldown}
                options={chartOptions}
                title={title}
              />
            </div>
          </Tab>
          <Tab label='Data'>
            <div style={chartStyle}>
              <DataTable
                columns={columns}
                data={tableData}
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}