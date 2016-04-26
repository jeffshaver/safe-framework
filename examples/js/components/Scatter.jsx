import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultScatterPlot} from 'safe-framework'
import {scatterSeries, tableColumns, tableData} from '../fixtures'

const chartOptions = {
  showLines: false,
  subtitle: {
    text: 'Source: Heinz  2003'
  },
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
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)'
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x} cm, {point.y} kg'
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