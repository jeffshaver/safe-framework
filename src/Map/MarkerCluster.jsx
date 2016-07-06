import 'leaflet.markercluster'
import layerContainerType from 'react-leaflet/lib/types/layerContainer'
import {MapLayer} from 'react-leaflet'
import {markerClusterGroup} from 'leaflet'
import React from 'react'

export class MarkerCluster extends MapLayer {
  static childContextTypes = {
    layerContainer: layerContainerType
  };

  getChildContext () {
    return {
      layerContainer: this.leafletElement
    }
  }

  componentWillMount () {
    super.componentWillMount()

    this.leafletElement = markerClusterGroup()
  }
  
  shouldComponentUpdate () {
    return false
  }
  
  render () {
    const {children = [], map} = this.props
    
    return (
      <div style={{display: 'none'}}>
        {children.map((child) => (
          React.cloneElement(child, {
            layerContainer: this.leafletElement,
            map
          })
        ))}
      </div>
    )
  }
}