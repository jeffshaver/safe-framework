import IconButton from 'material-ui/IconButton/IconButton'
import IconMenu from 'material-ui/IconMenu/IconMenu'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Toolbar from 'material-ui/Toolbar/Toolbar'
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle'
import React, {Component, PropTypes} from 'react'

const style = {
  iconButton: {
    margin: '0.35rem -0.75rem 0 0'
  }
}

export class VisualizationToolbar extends Component {
  static propTypes = {
    children: React.PropTypes.element,
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    children: null
  }

  render () {
    const {children, title} = this.props

    return (
      <Toolbar>
        <ToolbarGroup float='left'>
          <ToolbarTitle text={title} />
        </ToolbarGroup>
        <ToolbarGroup float='right'>
          {/* Icons to float to right */}
          {children
            ? <IconMenu
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              iconButtonElement={
                <IconButton
                  style={style.iconButton}
                  touch={true}
                >
                  <NavigationMenu />
                </IconButton>
              }
              targetOrigin={{vertical: 'top', horizontal: 'right'}}
            >
              {children}
            </IconMenu>
          : null
        }
        </ToolbarGroup>
      </Toolbar>
    )
  }
}