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
    children: PropTypes.node,
    className: PropTypes.string,
    isOdd: PropTypes.bool.isRequired,
    overlay: PropTypes.bool.isRequired,
    skewBottom: PropTypes.bool.isRequired,
    skewTop: PropTypes.bool.isRequired,
    styles: PropTypes.object
  };

  static defaultProps = {
    className: '',
    isOdd: false,
    overlay: false,
    skewBottom: true,
    skewTop: true,
    styles: {}
  };

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
      <section className={this.props.className}
        style={[
          style.base,
          this.props.styles && this.props.styles,
          this.props.isOdd && style.oddChildren
        ]}>
        {this.getOverlay()}
        {this.getBefore()}
        {this.props.children}
        {this.getAfter()}
      </section>
    )
  }
}