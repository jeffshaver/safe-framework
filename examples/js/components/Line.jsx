import React, {Component, PropTypes} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultLineChart} from 'safe-framework'
import {lineSeries, tableColumns, tableData} from '../fixtures'

class Line extends Component {
    render () {
       return (
         <Paper zDepth={1}>
           <Card>
             <CardTitle
               title="Line + Table"
               subtitle="Tab Layout"
             />
             <DefaultLineChart
               columns={tableColumns}
               data={tableData}
               series={lineSeries}
               size={'col-xs-12 col-sm-12'}
               title={'Default Line Chart'}
             />
           </Card>
         </Paper>
      )}
}

export default (Line)