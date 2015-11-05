import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
//import {} from './reducers'
import App from './components/App'
import {fetchEvents} from './actionCreators'

injectTapEventPlugin()

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
//
// const store = createStoreWithMiddleware(combineReducers({
//
// }))

ReactDOM.render(
  //<Provider store={store}>
    <App />
  //</Provider>
, document.querySelector('.app'))