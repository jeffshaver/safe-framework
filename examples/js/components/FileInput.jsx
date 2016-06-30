import {FileInput as SafeFileInput} from 'safe-framework'
import {Card, CardText, CardTitle, Paper, RaisedButton} from 'material-ui'
import React, {Component} from 'react'

class FileInput extends Component {
  constructor () {
    super()
    this.state = {
      disabled: false
    }
  }

  shouldReject (file) {
    return !/\.csv$/.test(file.name)
  }

  onButtonClick () {
    this.setState({disabled: !this.state.disabled})
  }

  onChange (file) {
    let alertText = ''

    for (const key in file) {
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
              disabled={this.state.disabled}
              onChange={::this.onChange}
            />
            <SafeFileInput
              accept={'.csv'}
              disabled={this.state.disabled}
              shouldReject={::this.shouldReject}
              onChange={::this.onChange}
              onReject={::this.onReject}
            />
            <RaisedButton
              label='Toggle Fields'
              style={{margin: 12}}
              onTouchTap={::this.onButtonClick}
            />
          </CardText>
        </Card>
      </Paper>
    )
  }
}

export default FileInput