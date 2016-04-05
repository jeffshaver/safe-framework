import React, {Component, PropTypes} from 'react'
import {TextField} from 'material-ui'

export class FileInput extends Component {
  static propTypes = {
    accept: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    accept: ''
  }

  constructor (props) {
    super(props)

    this.state = {
      text: 'Click to browse'
    }
  }

  onChange ({target}) {
    const value = target.value
    const file = target.files[0]

    this.updateText(value)
    this.props.onChange(file)
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
    const {accept} = this.props

    return (
      <span>
        <TextField
          hintText={'Click to browse'}
          value={this.state.text}
          onTouchTap={::this.openFileBrowser}
        />
        <input
          accept={accept}
          ref='input'
          style={{display: 'none'}}
          type='file'
          onChange={::this.onChange}
        />
      </span>
    )
  }
}