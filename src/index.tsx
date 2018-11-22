// #region imports
import 'babel-polyfill'
import { render } from 'react-dom'
import React from 'react'
import App from './components/App'
import './css/styles.css'

import 'semantic-ui-css/semantic.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
// #endregion

render(
  <App />,
  document.getElementById('app'),
)
