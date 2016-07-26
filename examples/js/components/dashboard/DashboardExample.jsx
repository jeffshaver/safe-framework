import * as FrameworkTypes from 'safe-framework'
import {ChartComponent} from './ChartComponent'
import {MapComponent} from './MapComponent'
import {menuItemDefs} from '../../utils'
import {TableComponent} from './TableComponent'
import {Card, CardTitle, Paper} from 'material-ui'
import {columnSeriesFromData, dashboardData, mapData, tableData} from '../../fixtures'
import React, {Component} from 'react'

const componentTypes = {ChartComponent, MapComponent, TableComponent}

export default class DashboardExample extends Component {
  getComponentType (type, visualization) {
    return componentTypes[`${this.getTypeGroup(type)}Component`]
  }

  getTypeGroup (type) {
    if (FrameworkTypes[`${type}Chart`]) {
      return 'Chart'
    }

    return type
  }

  render () {
    const {Dashboard, SelectField} = FrameworkTypes

    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            title='Dashboard'
          />
          <Dashboard
            dashboard={dashboardData}
            getComponentType={::this.getComponentType}
            getTypeGroup={::this.getTypeGroup}
            header={[(
              <SelectField
                items={[{primaryText: 'a', value: 'a'}, {primaryText: 'b', value: 'b'}, {primaryText: 'c', value: 'c'}]}
                key='selectField'
                keyProp={'value'}
                primaryTextProp={'primaryText'}
                style={{padding: '0 0 0 16px'}}
                value={'a'}
                valueProp={'value'}
                onChange={() => {}}
              />
            )]}
            menuItemDefs={menuItemDefs}
            visualizationResults={{
              columnViz: columnSeriesFromData,
              mapViz: {
                data: {
                  baseData: mapData.baseLayer.data,
                  ...mapData
                }
              },
              tableViz: {data: tableData}
            }}
          />
        </Card>
      </Paper>
    )
  }
}