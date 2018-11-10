import React from 'react'
import { Route } from 'react-router-dom'

import Resume from '../resume/resume'
import SubHeader from './SubHeader'
import styles from './main.css'

/*
justify-content-center: to align an element
*/

const Main = () => {
  const wrapper = [styles.layout, styles.family_sans].join(' ')
  return (
    <div className={wrapper}>
      <Route path="/" exact render={(props) => <SubHeader {...props} title={'Resume'} />} />
      <Route path="/courses" exact component={Resume} />
    </div>
  )
}

export default Main
