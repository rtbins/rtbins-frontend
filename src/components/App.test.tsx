// #region imports
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'
// #endregion

describe('App rendering tests', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <App />,
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
