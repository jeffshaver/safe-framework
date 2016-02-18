import React, {Component} from 'react'
import Radium from 'radium'

let style = {
  fontSize: '1.2rem',
  padding: '1em'
}

@Radium
export class Footer extends Component {
  render () {
    return (
      <footer style={[style]}>
        © 2015
      </footer>
    )
  }
}
