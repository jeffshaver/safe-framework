import {DefaultLineChart} from 'safe-framework'
import {Card, CardTitle, Paper} from 'material-ui'
import {lineSeries, tableColumns, tableData} from '../fixtures'
import React, {Component} from 'react'

const chartConfig = {
  scales: {
    xAxes: [{}],
    yAxes: [{
      scaleLabel: {
        label: true,
        labelString: 'Temperature (°C)'
      }
    }]
  },
  legend: {
    layout: 'vertical',
    position: 'bottom',
    verticalAlign: 'middle',
    borderWidth: 0
  }
}

class Line extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Line + Table'
          />
          <DefaultLineChart
            chartData={lineSeries}
            chartOptions={chartConfig}
            columns={tableColumns}
            series={lineSeries}
            size={'col-xs-12 col-sm-12'}
            tableData={tableData}
            title={'Monthly Average Temperature'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Line