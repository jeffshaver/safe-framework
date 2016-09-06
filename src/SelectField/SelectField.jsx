import CircularProgress from '../CircularProgress'
import MaterialSelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import React, {PropTypes} from 'react'

const style = {
  label: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  menuItem: {
    cursor: 'default'
  },
  progress: {
    left: '-15px',
    top: '-15px'
  }
}
const progress = (
  <CircularProgress
    size={0.2}
    style={style.progress}
    text={''}
  />
)

export const SelectField = (props) => {
  const {
    disabled,
    errorText,
    hintText,
    isFetching,
    items,
    keyProp,
    primaryTextProp,
    style: selectStyle,
    value,
    valueProp,
    onChange
  } = props

  const text = isFetching
    ? progress
    : hintText

  return (
    <MaterialSelectField
      disabled={disabled || isFetching}
      errorText={errorText}
      floatingLabelText={text}
      items={items}
      labelStyle={style.label}
      style={selectStyle}
      value={value}
      onChange={onChange}
    >
      {
        items.map((item) => (
          <MenuItem
            key={item[keyProp]}
            primaryText={item[primaryTextProp]}
            style={style.menuItem}
            value={item[valueProp]}
          />
        ))
      }
    </MaterialSelectField>
  )
}

SelectField.propTypes = {
  disabled: PropTypes.bool,
  errorText: PropTypes.node,
  floatingLabelText: PropTypes.string,
  hintText: PropTypes.string,
  isFetching: PropTypes.bool,
  items: PropTypes.array.isRequired,
  keyProp: PropTypes.string.isRequired,
  primaryTextProp: PropTypes.string.isRequired,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  valueProp: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

SelectField.defaultProps = {
  isFetching: false,
  style: {},
  floatingLabelText: 'Select a field',
  hintText: 'Select a field'
}