import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultAreaChart} from 'safe-framework'
import {areaSeries, tableColumns, tableData} from '../fixtures'

const chartConfig = {
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
        callback: (tickValue, index, ticks) => {
          return tickValue / 1000 + 'k'
        }
      }
    }]
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        const dataLabel = data.datasets[tooltipItem.datasetIndex].label
        
        return `${dataLabel} produced ${tooltipItem.yLabel} warheads`
      }
    }
  }
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