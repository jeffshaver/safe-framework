import CircularProgress from 'material-ui/CircularProgress'
import {generateMenuItems} from '../utilities'
import {VisualizationToolbar} from './VisualizationToolbar'
import React, {Component, PropTypes} from 'react'

const style = {
  container: {
    height: '100%'
  }
}

export class Visualization extends Component {
  static propTypes = {
    componentType: PropTypes.func.isRequired,
    menuItemDefs: PropTypes.array.isRequired,
    results: PropTypes.object,
    visualization: PropTypes.object.isRequired,
    onMount: PropTypes.func
  }

  static defaultProps = {
    results: {},
    onMount: () => {}
  }

  componentWillMount () {
    const {componentType, menuItemDefs, visualization} = this.props

    this._menuItems = generateMenuItems(
      componentType,
      [visualization, this],
      menuItemDefs
    )
  }

  componentDidMount () {
    const {onMount, visualization} = this.props

    onMount(visualization)
  }

  componentWillUnmount () {
    this._menuItems = null
  }

  render () {
    const {
      componentType: Component,
      results,
      visualization
    } = this.props
    const {name, visualizationType} = visualization

    if (!results) {
      return null
    }

    if (results.isFetching) {
      return (
        <span style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          'transform': 'translate(-50%, -50%)'
        }}>
        <CircularProgress
          size={0.5}
          style={{
            left: '.5em',
            top: '1.2em'
          }}
        /> Loading...
        </span>
      )
    }

    const {data = []} = results
    const {name: visualizationTypeName} = visualizationType

    if (data.length === 0) {
      return <div />
    }

    return (
      <div style={style.container}>
        <VisualizationToolbar
          menuItems={this._menuItems}
          title={name}
        />
        <Component
          data={data}
          metadata={visualization}
          name={name}
          ref={(ref) => (this._component = ref)}
          type={visualizationTypeName}
        />
      </div>
    )
  }
}