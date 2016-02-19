import React, {Component} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultMap} from 'safe-framework'
import {mapCenter, mapMarkers, mapTitle, tableColumns, tableData} from '../fixtures'

class Map extends Component {
  render () {
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            subtitle='Tab Layout'
            title='Map + Table'
          />
          <DefaultMap
            center={mapCenter}
            columns={tableColumns}
            data={tableData}
            markers={mapMarkers}
            size={'col-xs-12 col-sm-12'}
            title={mapTitle}
            zoomControlPosition={'topleft'}
          />
        </Card>
      </Paper>
    )
  }
}

export default Map
