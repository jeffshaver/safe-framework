import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right'
import CircularProgress from '../CircularProgress'
import MaterialSelectField from './MUISelectField'
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
    top: '35px'
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
    childProp,
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
      disabled={isFetching}
      errorText={errorText}
      floatingLabelText={text}
      labelStyle={style.label}
      style={selectStyle}
      value={value}
      onChange={onChange}
    >
      {
        items.map((item) => {
          const children = item[childProp]
          const hasChildren = children && children.length > 0

          return (
            <MenuItem
              key={item[keyProp]}
              menuItems={
                hasChildren
                  ? children.map((child) => (
                    <MenuItem
                      key={child[keyProp]}
                      primaryText={child[primaryTextProp]}
                      style={style.menuItem}
                      value={child[valueProp]}
                    />
                  ))
                  : undefined
              }
              primaryText={item[primaryTextProp]}
              rightIcon={
                hasChildren
                ? <ArrowDropRight />
                : null
              }
              style={style.menuItem}
              value={item[valueProp]}
            />
          )
        })
      }
    </MaterialSelectField>
  )
}

SelectField.propTypes = {
  childProp: PropTypes.string,
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