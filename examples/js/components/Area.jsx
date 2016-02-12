import React, {Component, PropTypes} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultAreaChart} from 'safe-framework'
import {areaSeries, tableColumns, tableData} from '../fixtures'

const columns = [
  {title: 'Dessert', data: 'dessert'},
  {title: 'Calories', data: 'calories'}
]

const data = [
  {dessert: 'Cupcake', calories: 305},
  {dessert: 'Cake', calories: 405},
  {dessert: 'Nerds', calories: 505}
]

class Area extends Component {
    render () {
       return (
      <Paper zDepth={1}>
       <Card>
         <CardTitle
           title="Area + Table"
           subtitle="Tab Layout"
         />
       <DefaultAreaChart
         columns={tableColumns}
         data={tableData}
         series={areaSeries}
         size={'col-xs-12 col-sm-12'}
         title={'Default Area Chart'}
       />
       </Card>
      </Paper>
    )}
}

export default (Area)