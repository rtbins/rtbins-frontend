// @flow
// #region imports
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
// #endregion

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
