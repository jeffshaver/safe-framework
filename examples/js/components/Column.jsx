import {DefaultColumnChart} from 'safe-framework'
import {Card, CardTitle, Paper} from 'material-ui'
import {columnSeries, columnSeriesFromData, tableColumns, tableData} from '../fixtures'
import React, {Component} from 'react'

const chartConfig = {
  legend: {
    display: true
  },
  scales: {
    xAxes: [{}],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Total percent market share'
      }
    }]
  }
}

class Column extends Component {
  onClick (dataItem, seriesItem) {
    const {chart} = this.refs

    chart.getChart().drilldown(columnSeries)
  }

  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Column + Table'
          />
          <DefaultColumnChart
            chartData={columnSeriesFromData}
            chartOptions={chartConfig}
            chartProperties={{
              drilldown: true,
              onClick: ::this.onClick
            }}
            columns={tableColumns}
            ref='chart'
            size={'col-xs-12 col-sm-12'}
            tableData={tableData}
            title={'Browser market shares. January, 2015 to May, 2015'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Column