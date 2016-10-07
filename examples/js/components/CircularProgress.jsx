import React from 'react'
import {CircularProgress as SafeCircularProgress} from 'safe-framework'
import {Card, CardText, CardTitle, Paper} from 'material-ui'

const CircularProgress = () => (
  <Paper zDepth={1}>
    <Card>
      <CardTitle
        title='File Input'
      />
      <CardText>
        <SafeCircularProgress
          text=''
        />
        <SafeCircularProgress
          size={0.5}
        />
      </CardText>
    </Card>
  </Paper>
)

export default CircularProgress