import * as FrameworkTypes from 'safe-framework'
import {ChartComponent} from './ChartComponent'
import {MapComponent} from './MapComponent'
import {TableComponent} from './TableComponent'
import {TableMenu} from './TableMenu'
import {Card, CardTitle, Paper} from 'material-ui'
import {columnSeriesFromData, dashboardData, mapData, tableData} from '../../fixtures'
import React, {Component} from 'react'

const componentTypes = {ChartComponent, MapComponent, TableComponent}
const menuTypes = {TableMenu}

export default class DashboardExample extends Component {
  getComponentType (type, visualization) {
    return componentTypes[`${this.getTypeName(type)}Component`]
  }

  getMenuType (type, visualization) {
    return menuTypes[`${this.getTypeName(type)}Menu`]
  }

  getTypeName (type) {
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
            getMenuType={::this.getMenuType}
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