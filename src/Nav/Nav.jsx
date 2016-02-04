import React, {Component, PropTypes} from 'react'
import Radium from 'radium'
// import NavItem from '../NavItem'
import {accentColor, fadedBody} from '../styles/colors'
import {large} from '../styles/media-queries'

let style = {
  button: {
    base: {
      borderBottom: `1px solid ${accentColor}`,
      borderTop: `1px solid ${accentColor}`,
      display: 'inline-block',
      height: '15px',
      position: 'absolute',
      right: '25px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '30px',
      [large]: {
        display: 'none'
      }
    },
    before: {
      background: accentColor,
      height: '1px',
      left: 0,
      position: 'absolute',
      top: '50%',
      width: '100%',
      transform: 'translateY(-50%)'
    }
  },
  ul: {
    base: {
      position: 'absolute',
      right: '-9999px',
      top: '100%',
      transition: 'background .25s, right 0s .25s',
      width: '100%',
      [large]: {
        float: 'right',
        position: 'static',
        right: 'auto',
        width: 'auto',
        top: 'auto'
      }
    },
    open: {
      background: fadedBody,
      right: 0,
      transition: 'background .25s'
    }
  }
}

@Radium
export class Nav extends Component {
  static propTypes = {
    navIsOpen: PropTypes.bool.isRequired,
    sections: PropTypes.array.isRequired,
    toggleNav: PropTypes.func.isRequired
  };

  handleNavButtonClick (event) {
    this.props.toggleNav()
  }
  
  render () {
    return (
      <div>
        /*<a href="#"
          style={[
            style.button.base
          ]}
          onClick={::this.handleNavButtonClick}
        >
          <div style={[
            style.button.before
          ]} />
        </a>*/
        <ul style={[
          style.ul.base,
          this.props.navIsOpen && style.ul.open
        ]}>
          {
            /* this.props.sections.map((section) => {
              return (
                <NavItem section={section} key={section.title} />
              )
            })*/
          }
        </ul>
      </div>
    )
  }
}