import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

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
