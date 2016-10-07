import MaterialCircularProgress from 'material-ui/CircularProgress'
import React, {PropTypes} from 'react'

const baseSize = 59.5
const baseThickness = 3.5

export const CircularProgress = ({size, spanStyle, style, text}) => {
  const realMargin = (size < 0.71)
    ? ((50 - 59.5 * size) / 2)
    : (5.25 * size)
  const realSize = size * baseSize
  const realThickness = size * baseThickness

  return (
    <span style={spanStyle}>
      <MaterialCircularProgress
        size={realSize}
        style={{
          margin: realMargin,
          ...style
        }}
        thickness={realThickness}
      /> {text}
    </span>
  )
}

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