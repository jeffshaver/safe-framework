import {DefaultScatterPlot} from 'safe-framework'
import {Card, CardTitle, Paper} from 'material-ui'
import React, {Component} from 'react'
import {scatterSeries, tableColumns, tableData} from '../fixtures'

const chartOptions = {
  scales: {
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Height (cm)'
      }
    }],
    yAxes: [{
      title: {
        text: 'Weight (kg)'
      }
    }]
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        return `${tooltipItem.xLabel} cm, ${tooltipItem.yLabel} kg`
      }
    }
  }
}

class Scatter extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Scatter + Table'
          />
          <DefaultScatterPlot
            chartData={scatterSeries}
            chartOptions={chartOptions}
            columns={tableColumns}
            data={tableData}
            size={'col-xs-12 col-sm-12'}
            tableData={tableData}
            title={'Height Versus Weight of 507 Individuals by Gender'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Scatter