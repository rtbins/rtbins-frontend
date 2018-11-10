// #region imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from '../store/configureStore'
// #endregion

const store = configureStore()

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    )
  })
})
