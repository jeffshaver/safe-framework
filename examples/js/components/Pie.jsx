import React, {Component, PropTypes} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultPieChart} from 'safe-framework'
import {pieDrilldown, pieSeries, tableColumns, tableData} from '../fixtures'

class Pie extends Component {
    render () {
       return (
         <Paper zDepth={1}>
           <Card>
             <CardTitle
               title="Pie + Table"
               subtitle="Tab Layout"
             />
             <DefaultPieChart
               columns={tableColumns}
               data={tableData}
               drilldown={pieDrilldown}
               series={pieSeries}
               size={'col-xs-12 col-sm-12'}
               title={'Default Pie Chart'}
             />
           </Card>
         </Paper>
    )}
}

export default (Pie)