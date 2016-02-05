import React, {Component, PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui'
import LineChart from '../LineChart'
import DataTable from '../DataTable'

export class DefaultLineChart extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    drilldown: PropTypes.object,
    series: PropTypes.array.isRequired,
    size: PropTypes.string,
    title: PropTypes.string.isRequired
  };

  render () {
    return (
      <div className={this.props.size}>
        <Tabs>
          <Tab label="Chart">
            <LineChart
              drilldown={this.props.drilldown}
              series={this.props.series}
              title={this.props.title}
            />
          </Tab>
          <Tab label="Data">
            <DataTable
              columns={this.props.columns}
              data={this.props.data}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
}