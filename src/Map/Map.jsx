import React, {Component, PropTypes} from 'react'
import {
  /* LayersControl, */
  Map as LeafletMap,
  TileLayer,
  ZoomControl
} from 'react-leaflet'
import {LayerGroup} from './LayerGroup'

const baseLayer = (
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    layerName='OpenStreetMap'
    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  />
)

export class Map extends Component {
  static propTypes = {
    center: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    zoomControlPosition: PropTypes.string
  };

  static defaultProps = {
    zoomControlPosition: 'topright'
  };

  render () {
    const {center, /* title, */zoomControlPosition} = this.props

    const layerGroup = <LayerGroup {...this.props}/>

    /* const base = {
      'OpenStreetMap': baseLayer
    } */

    /* const overlay = {
      [title]: layerGroup
    } */

    return (
      <LeafletMap
        center={center}
        minZoom={3}
        zoom={5}
      >
        {baseLayer}
        {layerGroup}
        {/* <LayersControl baseLayers={base} overlays={overlay}>
        </LayersControl> */}
        <ZoomControl position={zoomControlPosition} />
      </LeafletMap>
    )
  }
}