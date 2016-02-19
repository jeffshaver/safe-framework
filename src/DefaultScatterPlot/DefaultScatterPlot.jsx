import React, {Component, PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui'
import ScatterPlot from '../ScatterPlot'
import DataTable from '../DataTable'

export class DefaultScatterPlot extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    series: PropTypes.array.isRequired,
    size: PropTypes.string,
    title: PropTypes.string.isRequired
  }

  render () {
    const {columns, data, series, size, title} = this.props

    return (
      <div className={size}>
        <Tabs>
          <Tab label='Chart'>
            <ScatterPlot
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