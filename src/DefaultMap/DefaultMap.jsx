import DataTable from '../DataTable'
import Map from '../Map'
import React, {Component, PropTypes} from 'react'
import {Tab, Tabs} from 'material-ui'

export class DefaultMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    mapDataOptions: PropTypes.object,
    mapOptions: PropTypes.object.isRequired,
    size: PropTypes.string,
    tileLayerOptions: PropTypes.object,
    title: PropTypes.string.isRequired,
    wms: PropTypes.bool,
    zoomControlPosition: PropTypes.string
  }

  static defaultProps = {
    mapDataOptions: {},
    size: 'col-xs-12 col-sm-12',
    tileLayerOptions: {},
    wms: false,
    zoomControlPosition: 'topleft'
  }

  render () {
    const {
      center,
      columns,
      data,
      mapDataOptions,
      mapOptions,
      size,
      tileLayerOptions,
      title,
      wms,
      zoomControlPosition
    } = this.props

    return (
      <div className={size}>
        <Tabs>
          <Tab label='Map'>
            <Map
              {...mapOptions}
              center={center}
              dataOptions={mapDataOptions}
              tileLayerOptions={tileLayerOptions}
              title={title}
              wms={wms}
              zoomControlPosition={zoomControlPosition}
            />
          </Tab>
          <Tab label='Data'>
            <DataTable
              columns={columns}
              data={data}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
}