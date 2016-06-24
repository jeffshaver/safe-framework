import {getSvgIcon} from '../utilities'
import Leaflet from 'leaflet'
import titleCase from 'title-case'
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {
  LayersControl,
  LayerGroup,
  Map as LeafletMap,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  WMSTileLayer
} from 'react-leaflet'
import 'drmonty-leaflet-awesome-markers'
import MapsPlace from 'material-ui/svg-icons/maps/place'

const {Overlay} = LayersControl

export class Map extends Component {
  static propTypes = {
    baseLayer: PropTypes.object,
    center: PropTypes.array,
    dataOptions: PropTypes.object,
    layers: PropTypes.array,
    mapOptions: PropTypes.object,
    tileLayerOptions: PropTypes.object,
    title: PropTypes.string.isRequired,
    wms: PropTypes.bool,
    zoomControlPosition: PropTypes.string
  }
  
  static defaultProps = {
    center: null,
    dataOptions: {},
    mapOptions: {
      minZoom: 3,
      zoom: 5,
      zoomControl: true
    },
    tileLayerOptions: {},
    wms: false,
    zoomControlPosition: 'topright'
  }

  constructor (props) {
    super(props)
    
    this.loaded = ::this.loaded
  }

  loaded () {
    const domNode = ReactDOM.findDOMNode(this)
    // Grab all of the Layer Control Labels and move them to accommodate
    // material ui theming.
    const checkboxLabels =
      domNode.querySelectorAll('.leaflet-control-layers-selector + span')
      
    for (const [index, checkboxLabel] of checkboxLabels.entries()) {
      if (checkboxLabel.innerHTML.length === 0) {
        break
      }
      
      checkboxLabel.insertAdjacentHTML('afterend', checkboxLabel.innerHTML)
      checkboxLabel.insertAdjacentHTML('afterend', getSvgIcon(MapsPlace, {
        color: this.getColor(index + 1),
        style: {
          height: '16px',
          width: '16px'
        }
      }))
      
      checkboxLabel.innerHTML = ''
    }
    
    this.forceUpdate()
  }
  
  getColor (index) {
    return allColors[index]
  }

  createBaseLayer () {
    const {baseLayer} = this.props
    
    return this.createLayerData({
      ...baseLayer,
      name: 'baseLayer'
    }, this.getColor(0))
  }

  createLayers () {
    const {layers = []} = this.props
    
    return layers.map((layer, index) => (
      this.createLayer(layer, this.getColor(index + 1))
    ))
  }

  createLayer (layer, overrideColor) {
    const {name: key} = layer
    
    return (
      <Overlay
        key={key}
        name={key}
      >
        <LayerGroup>
          {this.createLayerData(layer, overrideColor)}
        </LayerGroup>
      </Overlay>
    )
  }

  createLayerData (layer, overrideColor) {
    const {dataOptions} = this.props
    const {layerParams = {}} = dataOptions
    const {color = overrideColor, name: key} = layer
    
    // Create Layer from data provided.
    if (layer.data) {
      return this.createElementsFromData(
        layer.data,
        layerParams[layer.name] || dataOptions,
        overrideColor,
        key
      )
    }
    
    // Create layer from markers/lines.
    return [
      ...this.createMarkers(layer.markers, key, color),
      ...this.createLines(layer.lines, key, color)
    ]
  }

  createMarkers (markers = [], key, color) {
    return markers.map((marker, index) => (
      this.createMarker({
        color,
        ...marker
      }, key + index)
    ))
  }
  
  createMarker (marker, key) {
    const {color, label, labels = []} = marker
    
    if (label) {
      labels.push(label)
    }
    
    const icon = Leaflet.AwesomeMarkers.icon({
      icon: 'circle',
      markerColor: color,
      prefix: 'material-icons'
    })
    
    return (
      <Marker
        icon={icon}
        key={`marker${key}`}
        position={marker.position}
      >
        {this.createPopupLabel(labels)}
      </Marker>
    )
  }
  
  createLines (lines = [], key, color) {
    return lines.reduce((prev, line, index, array) => (
      prev.concat(this.createLine(line, color, key, index))
    ), [])
  }
  
  createLine (line, color, key, index) {
    const {labels = [], positions = []} = line
    const [start, end] = positions
    const [startLabel, endLabel] = labels
    key = `${key}line${index}`
      
    return [
      <Polyline
        color={line.color || color}
        key={key}
        positions={[start, end]}
        weight={2}
      >
        {this.createPopupLabel(labels)}
      </Polyline>,
      this.createMarker({
        color,
        position: start,
        labels: [startLabel]
      }, `start${key}`),
      this.createMarker({
        color,
        position: end,
        labels: [endLabel]
      }, `end${key}`)
    ]
  }
  
  createPopupLabel (labels) {
    const popupLabels = this.createLabels(labels)
    
    return popupLabels.length > 0
      ? <Popup>
          <div>
            {popupLabels}
          </div>
        </Popup>
      : null
  }
  
  createElementsFromData (data = [], dataOptions, color, key) {
    return data.reduce((prev, dataItem, index, array) => (
      prev.concat(
        this.createElementFromDataItem(dataItem, dataOptions, color, key, index))
    ), [])
  }
  
  createElementFromDataItem (dataItem, dataOptions, color, key, index) {
    // TODO: Extract these names and make them configurable to the Map.
    const {
      label = 'Label',
      latField = 'Latitude',
      longField = 'Longitude',
      sourcePrefix,
      destinationPrefix
    } = dataOptions
    const labelFields = Array.isArray(label) ? label : [label]
    
    const latTitle = titleCase(latField)
    const longTitle = titleCase(longField)
    
    // If contains source prefix value in data,
    // assume we are creating a line.
    if (dataItem[sourcePrefix + latTitle]) {
      const labels = labelFields.reduce((prev, labelField) => {
        const labelTitle = titleCase(labelField)
        
        return prev.concat([
          dataItem[sourcePrefix + labelTitle],
          dataItem[destinationPrefix + labelTitle]
        ])
      }, [])
      
      return this.createLine({
        labels,
        positions: [
          [dataItem[sourcePrefix + latTitle], dataItem[sourcePrefix + longTitle]],
          [dataItem[destinationPrefix + latTitle], dataItem[destinationPrefix + longTitle]]
        ]
      }, color, key, index)
    } else {
      const labels = labelFields.map((labelField) => (
        dataItem[labelField]
      ))
      
      if (typeof dataItem[latField] === 'string') {
        return null
      }
      
      return this.createMarker({
        position: [dataItem[latField], dataItem[longField]],
        labels,
        color
      }, index)
    }
  }
  
  constructLabelData () {
    
  }
  
  createLabels (labels) {
    return labels.filter((label) => label)
      .map((label, index) => (
        <div
          key={index}
          style={{
            fontWeight: index === 0 ? 'bold' : 'normal'
          }}
        >
          {label}
        </div>
      ))
  }

  render () {
    const {center, mapOptions, tileLayerOptions, wms, zoomControlPosition} = this.props
    let TileLayerComponent = wms ? WMSTileLayer : TileLayer
    const layers = this.createLayers()
    
    return (
      <LeafletMap
        center={center}
        {...mapOptions}
      >
        <TileLayerComponent
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          onLoad={this.loaded}
          {...tileLayerOptions}
        />
        <LayerGroup>
          {this.createBaseLayer()}
        </LayerGroup>
        {layers.length > 0
        ? <LayersControl position={zoomControlPosition}>
            {this.createLayers()}
          </LayersControl>
        : null}
      </LeafletMap>
    )
  }
}

const allColors = [
  'blue',
  'green',
  'purple',
  'orange',
  'darkred',
  'beige',
  'darkblue',
  'darkgreen',
  'cadetblue',
  'darkpurple',
  'lightred',
  'white',
  'pink',
  'lightblue',
  'lightgreen',
  'gray',
  'black',
  'lightgray'
]