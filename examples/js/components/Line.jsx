import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultLineChart} from 'safe-framework'
import {lineSeries, tableColumns, tableData} from '../fixtures'

const chartConfig = {
  title: {
    text: 'Monthly Average Temperature'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  scales: {
    xAxes: [{}],
    yAxes: [{
      scaleLabel: {
        label: true,
        labelString: 'Temperature (°C)'
      }
    }]
  },
  tooltip: {
    valueSuffix: '°C'
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
            title={'Default Line Chart'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Line