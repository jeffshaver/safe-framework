import React, {Component, PropTypes} from 'react'
import {TextField} from 'material-ui'

export class FileInput extends Component {
  static propTypes = {
    shouldReject: PropTypes.func,
    onChange: PropTypes.func,
    onReject: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      text: 'Click to browse'
    }
  }

  onChange ({target}) {
    const {shouldReject, onChange, onReject} = this.props
    const value = target.value
    const file = target.files[0]

    if (shouldReject(file)) {
      this.updateText('Click to browse')
      if (!onReject) {
        return
      }

      onReject(file)

      return
    }

    this.updateText(value)
    onChange(file)
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