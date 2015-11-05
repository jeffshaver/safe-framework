import React, {Component, PropTypes} from 'react'
import Radium from 'radium'
import {accentColor, body} from '../styles/colors'

let style = {
  base: {
    overflow: 'hidden',
    padding: '15vh 25px',
    position: 'relative',
    width: '100%'
  },
  oddChildren: {
    backgroundColor: accentColor,
    backgroundImage: `linear-gradient(145deg, ${accentColor}, hsl(176, 69%, 42%))`,
    color: body
  },
  overlay: {
    background: Color(body).alpha(0.6).hslString(),
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transform: 'none',
    width: '100%'
  },
  before: {
    background: body,
    height: '84px',
    left: 0,
    position: 'absolute',
    top: '-42px',
    transform: 'skewY(-1deg)',
    width: '100%'
  },
  after: {
    background: body,
    bottom: '-42px',
    height: '84px',
    left: 0,
    position: 'absolute',
    transform: 'skewY(-1deg)',
    width: '100%'
  }
}

@Radium
export class Section extends Component {
  static propTypes = {
    className: PropTypes.string,
    isOdd: PropTypes.bool.isRequired,
    skewBottom: PropTypes.bool.isRequired,
    skewTop: PropTypes.bool.isRequired,
    overlay: PropTypes.bool.isRequired
  }
  static defaultProps = {
    isOdd: false,
    skewBottom: true,
    skewTop: true,
    overlay: false
  }
  getOverlay () {
    return this.props.overlay ? <div style={[style.overlay]}></div> : undefined
  }
  getBefore () {
    return this.props.skewTop ? <div style={[style.before]}></div> : undefined
  }
  getAfter () {
    return this.props.skewBottom ? <div style={[style.after]}></div> : undefined
  }
  render () {
    return (
      <section style={[
        style.base,
        this.props.styles && this.props.styles,
        this.props.isOdd && style.oddChildren
      ]} className={this.props.className}>
        {this.getOverlay()}
        {this.getBefore()}
        {this.props.children}
        {this.getAfter()}
      </section>
    )
  }
}