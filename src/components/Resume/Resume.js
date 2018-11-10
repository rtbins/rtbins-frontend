// #region imports
import React from 'react'
import styles from './resume.css'
import Mission from './content/mission'
import Projects from './content/projects'
import Education from './content/education'
import WorkExperience from './content/workExperience'

import data from '../../data/resume'
// #endregion

class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mission: null,
      projects: null,
      education: null,
      workExperience: null,
    }
    this.state = data[0]
  }

  render() {
    const { mission, projects, education, workExperience } = this.state
    return (
      <div className={styles.layout_main}>
        <Mission mission={mission} />
        <Projects projects={projects} />
        <Education education={education} />
        <WorkExperience workExperience={workExperience} />
      </div>
    )
  }
}
export default Resume
