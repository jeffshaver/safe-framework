import React, {Component} from 'react'
import {Card, CardText, CardTitle, Paper} from 'material-ui'
import {FileInput} from 'safe-framework'

class Area extends Component {
  onChange (value) {
    window.alert(value)
  }

  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            title='File Input'
          />
          <CardText>
            <FileInput
              onChange={::this.onChange}
            />
          </CardText>
        </Card>
      </Paper>
    )
  }
}

export default Area