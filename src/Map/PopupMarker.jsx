import React from 'react'
import {Marker, Popup} from 'react-leaflet'

export const PopupMarker = ({map, position, children}) => (
  <Marker
    map={map}
    position={position}
  >
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
)