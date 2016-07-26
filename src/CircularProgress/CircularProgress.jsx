import MaterialCircularProgress from 'material-ui/CircularProgress'
import React, {PropTypes} from 'react'

export const CircularProgress = ({size, spanStyle, style, text}) => (
  <span style={spanStyle}>
    <MaterialCircularProgress
      size={size}
      style={style}
    /> {text}
  </span>
)

CircularProgress.propTypes = {
  size: PropTypes.number,
  spanStyle: PropTypes.object,
  style: PropTypes.object,
  text: PropTypes.string
}

CircularProgress.defaultProps = {
  size: 1,
  spanStyle: {},
  style: {},
  text: 'Loading...'
}