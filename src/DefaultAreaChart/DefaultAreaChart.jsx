import React, {Component, PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui'
import AreaChart from '../AreaChart'
import DataTable from '../DataTable'

export class DefaultAreaChart extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    drilldown: PropTypes.object,
    series: PropTypes.array.isRequired,
    size: PropTypes.string,
    title: PropTypes.string.isRequired
  }

  render () {
    const {columns, data, drilldown, series, size, title} = this.props

    return (
      <div className={size}>
        <Tabs>
          <Tab label='Chart'>
            <AreaChart
              drilldown={drilldown}
              series={series}
              title={title}
            />
          </Tab>
          <Tab label='Data'>
            <DataTable
              columns={columns}
              data={data}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
}