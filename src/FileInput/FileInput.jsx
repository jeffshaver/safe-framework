import {TextField} from 'material-ui'
import React, {Component, PropTypes} from 'react'

export class FileInput extends Component {
  static propTypes = {
    accept: PropTypes.string,
    disabled: PropTypes.bool,
    shouldReject: PropTypes.func,
    onChange: PropTypes.func,
    onReject: PropTypes.func
  }

  static defaultProps = {
    accept: '',
    disabled: false
  }

  constructor (props) {
    super(props)

    this.openFileBrowser = ::this.openFileBrowser
    this.onChange = ::this.onChange

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
    const {accept, disabled} = this.props

    return (
      <span>
        <TextField
          disabled={disabled}
          hintText={'Click to browse'}
          value={this.state.text}
          onTouchTap={this.openFileBrowser}
        />
        <input
          accept={accept}
          disabled={disabled}
          ref='input'
          style={{display: 'none'}}
          type='file'
          onChange={this.onChange}
        />
      </span>
    )
  }
}