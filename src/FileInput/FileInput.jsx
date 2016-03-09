import React, {Component, PropTypes} from 'react'
import {FlatButton, TextField} from 'material-ui'

export class FileInput extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      text: 'Click to browse'
    }
  }

  onChange ({target}) {
    const value = target.value

    this.updateText(value)
    this.props.onChange(value)
  }

  openFileBrowser () {
    this.refs.input.click()
  }

  updateText (text) {
    this.setState({
      text: text
    })
  }

  render () {
    return (
      <span>
        <TextField
          hintText={'Click to browse'}
          value={this.state.text}
          onTouchTap={::this.openFileBrowser}
        />
        <input
          ref='input'
          style={{display: 'none'}}
          type='file'
          onChange={::this.onChange}
        />
      </span>
    )
  }
}