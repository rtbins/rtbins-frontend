// #region imports
import 'babel-polyfill'
import { render } from 'react-dom'
import React from 'react'
import App from './components/App'
import './css/styles.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import '../node_modules/toastr/build/toastr.min.css'
import '../node_modules/normalize.css/normalize.css'

// #endregion

library.add(fab)

render(
  <App />,
  document.getElementById('app'),
)
