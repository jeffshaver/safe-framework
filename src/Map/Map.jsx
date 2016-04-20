import React, {Component, PropTypes} from 'react'
import {
  LayersControl,
  LayerGroup,
  Map as LeafletMap,
  Marker,
  Popup,
  TileLayer
} from 'react-leaflet'
const {BaseLayer, Overlay} = LayersControl

export class Map extends Component {
  static propTypes = {
    center: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    zoomControlPosition: PropTypes.string
  }

  static defaultProps = {
    zoomControlPosition: 'topleft'
  }

  createMarkersList () {
    return this.props.markers.map((marker) => (
      <Marker
        key={marker.key}
        position={marker.position}
      >
        <Popup>
         <span>{marker.children}</span>
        </Popup>
      </Marker>
    ))
  }

  render () {
    const {center, title} = this.props
    return (
      <LeafletMap
        center={center}
        minZoom={3}
        zoom={5}
        zoomControl={true}
      >
        <LayersControl position='topright'>
          <BaseLayer
            checked
            name='Color'
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </BaseLayer>
          <BaseLayer name='Black & White'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            />
          </BaseLayer>
          <Overlay
            checked
            name={title}
          >
            <LayerGroup>
              {this.createMarkersList()}
            </LayerGroup>
          </Overlay>
        </LayersControl>
      </LeafletMap>
    )
  }
}