import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/App'
import Area from './components/Area'
import Bar from './components/Bar'
import BasicTable from './components/BasicTable'
import Column from './components/Column'
import FileInput from './components/FileInput'
import Line from './components/Line'
import Map from './components/Map'
import Pie from './components/Pie'
import Scatter from './components/Scatter'
import Table from './components/Table'

injectTapEventPlugin()

ReactDOM.render((
  <Router history={hashHistory}>
    <Route
      component={App}
      path='/'
    >
      <Route
        component={Area}
        path='components/area'
      />
      <Route
        component={Bar}
        path='components/bar'
      />
      <Route
        component={BasicTable}
        path='components/basic-table'
      />
      <Route
        component={Column}
        path='components/column'
      />
      <Route
        component={FileInput}
        path='components/file-input'
      />
      <Route
        component={Line}
        path='components/line'
      />
      <Route
        component={Map}
        path='components/map'
      />
      <Route
        component={Pie}
        path='components/pie'
      />
      <Route
        component={Scatter}
        path='components/scatter'
      />
      <Route
        component={Table}
        path='components/table'
      />
    </Route>
    <Route
      component={App}
      path='*'
    />
  </Router>
), document.querySelector('.app'))