import React, {Component, PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui'
import DataTable from '../DataTable'

export default (ChartElement) => class DefaultChart extends Component {
  static propTypes = {
    chartData: PropTypes.any.isRequired,
    chartOptions: PropTypes.object,
    chartProperties: PropTypes.object,
    chartStyle: PropTypes.object,
    columns: PropTypes.array.isRequired,
    size: PropTypes.string,
    tableData: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }
  
  static defaultProps = {
    chartProperties: {},
    chartStyle: {
      height: '75%'
    },
    size: '',
    title: null
  }

  getChart () {
    const {chart} = this.refs
    
    return chart
  }

  render () {
    const {
      chartData, chartOptions, chartProperties, chartStyle, columns, size, tableData, title
    } = this.props

    return (
      <div className={size}>
        <Tabs>
          <Tab label='Chart'>
            <div style={chartStyle}>
              <ChartElement
                data={chartData}
                options={chartOptions}
                ref='chart'
                title={title}
                {...chartProperties}
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