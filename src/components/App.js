// @flow
// #region imports
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './Footer'
import ResponsiveContainer from './ResponsiveContainer'
import Main from './Main'
// #endregion

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <ResponsiveContainer />
          <Main />
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
