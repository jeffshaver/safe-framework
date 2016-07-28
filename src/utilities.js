import {IconWrapper} from './Wrapper'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

export const getSvgIcon = (svgIcon, iconProps) => {
  const iconElement = React.createElement(svgIcon, {
    ...iconProps
  })

  const iconWrapper = React.createElement(IconWrapper, {}, iconElement)

  return ReactDOMServer.renderToStaticMarkup(iconWrapper)
}