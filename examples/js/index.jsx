import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, hashHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/App'
import Area from './components/Area'
import Column from './components/Column'
import Line from './components/Line'
import Map from './components/Map'
import Pie from './components/Pie'
import Table from './components/Table'

injectTapEventPlugin()

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="components/area" component={Area}/>
      <Route path="components/column" component={Column}/>
      <Route path="components/line" component={Line}/>
      <Route path="components/map" component={Map}/>
      <Route path="components/pie" component={Pie}/>
      <Route path="components/table" component={Table}/>
    </Route>
    <Route path="*" component={App}/>
  </Router>
), document.querySelector('.app'))
