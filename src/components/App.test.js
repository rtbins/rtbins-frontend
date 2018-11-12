// #region imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import App from './App'
import configureStore from '../store/configureStore'
// #endregion

const store = configureStore()

describe('App rendering tests', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    )
  })
})

describe('Snapshot testing', () => {
  test('App snapshot test', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
