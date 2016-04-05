import React, {Component} from 'react'
import {Card, CardText, CardTitle, Paper} from 'material-ui'
import {FileInput} from 'safe-framework'

class Area extends Component {
  onChange (file) {
    let alertText = ''

    for (let key in file) {
      alertText += `${key}: ${file[key]}\n`
    }
    window.alert(alertText)
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
              accept={'.csv,.woff2'}
              onChange={::this.onChange}
            />
          </CardText>
        </Card>
      </Paper>
    )
  }
}

export default Area
