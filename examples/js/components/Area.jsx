import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultAreaChart} from 'safe-framework'
import {areaSeries, tableColumns, tableData} from '../fixtures'

const chartConfig = {
  subtitle: {
    text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
      'thebulletin.metapress.com</a>'
  },
  scales: {
    xAxes: [{
      scaleLabel: {
        display: false,
        labelString: ''
      }
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Nuclear weapon states'
      },
      ticks: {
        beginAtZero: true,
        callback: (value) => {
          return value / 1000 + 'k'
        }
      }
    }]
  }
  // '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
}
  
class Area extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Area + Table'
          />
          <DefaultAreaChart
            chartData={areaSeries}
            chartOptions={chartConfig}
            columns={tableColumns}
            size={'col-xs-12 col-sm-12'}
            tableData={tableData}
            title={'US and USSR nuclear stockpiles'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Area