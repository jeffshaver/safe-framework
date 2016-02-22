import React, {PropTypes} from 'react'
import {LayerGroup as LeafletLayerGroup} from 'react-leaflet'
import {MarkersList} from './MarkersList'

export const LayerGroup = ({map, markers}) => (
  <LeafletLayerGroup map={map}>
    <MarkersList markers={markers} />
  </LeafletLayerGroup>
)

LayerGroup.propTypes = {
  map: PropTypes.object,
  markers: PropTypes.array.isRequired
}