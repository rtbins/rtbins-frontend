// #region imports
import 'babel-polyfill'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import React from 'react'

import './css/styles.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import '../node_modules/toastr/build/toastr.min.css'
import '../node_modules/normalize.css/normalize.css'
import configureStore from './store/configureStore'
import { loadCourses } from './actions/courseAction'
import { loadAuthors } from './actions/authorActions'
import App from './components/App'
// #endregion

library.add(fab)

const store = configureStore()
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
