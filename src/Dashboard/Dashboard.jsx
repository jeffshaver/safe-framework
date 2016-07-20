import {Visualization} from './'
import {GridList, GridTile} from 'material-ui/GridList'
import React, {Component, PropTypes} from 'react'

const style = {
  gridList: {
    width: '100%',
    height: '60%',
    overflowY: 'auto',
    marginBottom: 24
  },
  gridTile: {
    boxSizing: 'border-box',
    height: '500px'
  },
  visualization: {
    height: '100%'
  }
}

export class Dashboard extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    getComponentType: PropTypes.func,
    getMenuType: PropTypes.func,
    header: PropTypes.array,
    visualizationIdProp: PropTypes.string,
    visualizationResults: PropTypes.object.isRequired,
    onVisualizationMount: PropTypes.func,
    onWillMount: PropTypes.func
  }

  static defaultProps = {
    visualizationIdProp: '_id',
    getComponentType: () => {},
    getMenuType: () => {},
    header: [],
    onVisualizationMount: () => {},
    onWillMount: () => {}
  }

  componentWillMount () {
    const {dashboard, onWillMount} = this.props

    onWillMount(dashboard)
  }

  render () {
    const {dashboard} = this.props

    if (!dashboard) {
      return null
    }

    const {
      getComponentType,
      getMenuType,
      header,
      visualizationIdProp,
      visualizationResults = {},
      onVisualizationMount
    } = this.props
    const {dashboardParams = {}, visualizations = []} = dashboard
    const {size = 2, visualizationSizes = []} = dashboardParams

    return (
      <div>
        {header}
        <GridList
          cellHeight={500}
          cols={visualizations.length > 1 ? size : 1}
          padding={0}
          style={style.gridList}
        >
          {
            visualizations.map((visualization, i) => {
              const isFirst = i === 0
              const isFirstTwo = isFirst || i === 1
              const isLast = i === visualizations.length - 1
              const isLastTwo = isLast || i === visualizations.length - 2
              const {
                [visualizationIdProp]: visualizationId,
                visualizationType
              } = visualization
              const {name: typeName} = visualizationType
              const size = visualizationSizes[visualizationId]
              const results = visualizationResults[visualizationId]
              let padding = '10px'

              if (isFirst && size === 2 || isFirstTwo && size === 1) {
                padding = '0px 10px 10px 10px'
              }

              if (isLast && size === 2 || isLastTwo && size === 1) {
                padding = '10px 10px 0px 10px'
              }

              return (
                <GridTile
                  cols={size}
                  key={visualizationId}
                  style={{
                    ...(results && results.isFetching ? {} : style.gridTile),
                    padding
                  }}
                >
                  <Visualization
                    componentType={getComponentType(typeName, visualization)}
                    menuType={getMenuType(typeName, visualization)}
                    results={results}
                    visualization={visualization}
                    onMount={onVisualizationMount}
                  />
                </GridTile>
              )
            })
          }
        </GridList>
      </div>
    )
  }
}