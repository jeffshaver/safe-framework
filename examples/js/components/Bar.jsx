import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {BarChart} from 'safe-framework'
import {columnSeries, columnSeriesUpdateData} from '../fixtures'

const chartConfig = {
  legend: {
    display: false
  },
  scales: {
    xAxis: [{}],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Total percent market share'
      }
    }]
  }
}

class Bar extends Component {
  onClick (dataItem, series, datasetIndex) {
    const {chart} = this.refs
    
    chart.drilldown(columnSeriesUpdateData)
  }
  
  render () {
    return (
      <Paper zDepth={1}>
        <Card
          style={{
            height: '500px'
          }}
        >
          <CardTitle
            title='Bar'
          />
          <BarChart
            data={columnSeries}
            drilldown={true}
            options={chartConfig}
            ref='chart'
            title={'Browser market shares. January, 2015 to May, 2015'}
            onClick={::this.onClick}
          />
        </Card>
      </Paper>
    )
  }
}

export default Bar