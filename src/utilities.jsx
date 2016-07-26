import {IconWrapper} from './Wrapper'
import MenuItem from 'material-ui/MenuItem'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

export const getSvgIcon = (svgIcon, iconProps) => {
  const iconElement = React.createElement(svgIcon, {
    ...iconProps
  })

  const iconWrapper = React.createElement(IconWrapper, {}, iconElement)

  return ReactDOMServer.renderToStaticMarkup(iconWrapper)
}

export const generateMenuItems = (type, params, menuItemDefs) => {
  if (!type) {
    console.error('generateMenuItems(): you must pass in a type')
  }

  if (!['Map', 'Table'].includes(type)) {
    type = 'Chart'
  }

  return menuItemDefs
    .map(({key, leftIcon, primaryText, onTouchTap}, i) => {
      const onTouchTapWrapper = () => {
        onTouchTap(...params)
      }

      return (
        <MenuItem
          key={key}
          leftIcon={leftIcon}
          primaryText={primaryText}
          onTouchTap={onTouchTapWrapper}
        />
      )
    })
}