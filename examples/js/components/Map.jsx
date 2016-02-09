import React, {Component, PropTypes} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'

class Map extends Component {
    render () {
       return (
      <Paper zDepth={1}>
       <Card>
         <CardTitle
           title="Map + Table"
           subtitle="Tab Layout"
         />
       </Card>
      </Paper>
    )}
}

export default (Map)