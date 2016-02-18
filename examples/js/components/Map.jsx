import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'

class Map extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Map + Table'
          />
        </Card>
      </Paper>
    )
  }
}

export default Map