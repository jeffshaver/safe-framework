import React, {Component, PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui'
import DataTable from '../DataTable'
import Map from '../Map'

export class DefaultMap extends Component {
  static propTypes = {
    center: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired,
    size: PropTypes.string,
    title: PropTypes.string.isRequired,
    zoomControlPosition: PropTypes.string
  }

  static defaultProps = {
    size: 'col-xs-12 col-sm-12',
    zoomControlPosition: 'topright'
  }

  render () {
    const {
      center,
      columns,
      data,
      markers,
      size,
      title,
      zoomControlPosition
    } = this.props

    return (
      <div className={size}>
        <Tabs>
          <Tab label='Map'>
            <Map
              center={center}
              markers={markers}
              title={title}
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