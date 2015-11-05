import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'
import Nav from './Nav'
import {fadedBody} from '../styles/colors'

let style = {
  nav: {
    base: {
      position: 'fixed',
      width: '100%',
      transition: 'background .25s',
      zIndex: 2
    },
    scrolled: {
      background: fadedBody
    },
    open: {
      background: fadedBody
    }
  },
  wrapper: {
    base: {
      margin: '0 auto',
      padding: '1em',
      position: 'relative',
      width: '100%'
    },
    after: {
      clear: 'both',
      display: 'table',
      overflow: 'hidden',
      width: '100%'
    }
  }
}

@Radium
class Header extends Component {
  static propTypes = {
    navIsOpen: PropTypes.bool.isRequired,
    pageIsScrolled: PropTypes.bool.isRequired
  }
  render () {
    return (
      <nav style={[
        style.nav.base,
        //this.props.navIsOpen && style.nav.open,
        //this.props.pageIsScrolled && style.nav.scrolled
      ]}>
        <div style={[
          style.wrapper.base
        ]}>
          <Nav />
          <div style={[
            style.wrapper.after
          ]} />
        </div>
      </nav>
    )
  }
}

export default /*connect(state => ({
  navIsOpen: state.navIsOpen,
  pageIsScrolled: state.pageIsScrolled
}))*/(Header)