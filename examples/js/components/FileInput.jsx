import React, {Component} from 'react'
import {Card, CardText, CardTitle, Paper} from 'material-ui'
import {FileInput as SafeFileInput} from 'safe-framework'

class FileInput extends Component {
  shouldReject (file) {
    return !/\.csv$/.test(file.name)
  }

  onChange (file) {
    let alertText = ''

    for (let key in file) {
      alertText += `${key}: ${file[key]}\n`
    }
    window.alert(alertText)
  }

  onReject (file) {
    window.alert(`${file.name} is not a csv file. We only accept csv's`)
  }

  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            title='File Input'
          />
          <CardText>
            <SafeFileInput
              onChange={::this.onChange}
            />
            <SafeFileInput
              accept={'.csv'}
              shouldReject={::this.shouldReject}
              onChange={::this.onChange}
              onReject={::this.onReject}
            />
          </CardText>
        </Card>
      </Paper>
    )
  }
}

export default FileInput