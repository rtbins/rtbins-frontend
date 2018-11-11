// #region imports
import React from 'react'
import { Route } from 'react-router-dom'
import Resume from '../Resume'
import SubHeader from './SubHeader'
import styles from './main.css'

import data from '../../data/resume'
// #endregion

const Main = () => {
  const wrapper = [styles.layout, styles.family_sans].join(' ')
  const resumeData = data[0]
  return (
    <div className={wrapper}>
      <Route
        path="/"
        exact
        render={(props) => <SubHeader {...props} title="Resume" />}
      />
      <Route
        path="/courses"
        render={() => <Resume {...resumeData} title="Resume" />}
      />
    </div>
  )
}

export default Main
