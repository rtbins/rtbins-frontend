// @flow
// #region imports
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './Footer'
import Main from './Main'
// #endregion

const App = () => {
  return (
    <Router>
      <div>
        <Main />
        <Footer />
      </div>
    </Router>
  )
}

export default App
