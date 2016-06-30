import Radium from 'radium'
import React, {Component} from 'react'

const style = {
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
