import React, {PropTypes} from 'react'
import {Marker, Popup} from 'react-leaflet'

export const PopupMarker = ({children, map, position}) => (
  <Marker
    map={map}
    position={position}
  >
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
)

PopupMarker.propTypes = {
  children: PropTypes.node,
  map: PropTypes.object,
  position: PropTypes.array.isRequired
}