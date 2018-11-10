// #region imports
import React from 'react'
import PropTypes from 'prop-types'
import styles from './resume.css'
import Mission from './content/mission'
import Projects from './content/projects'
import Education from './content/education'
import WorkExperience from './content/workExperience'
// #endregion

const Resume = ({ mission, projects, education, workExperience }) => {
  return (
    <div className={styles.layout_main}>
      <Mission mission={mission} />
      <Projects projects={projects} />
      <Education education={education} />
      <WorkExperience workExperience={workExperience} />
    </div>
  )
}

Resume.propTypes = {
  mission: PropTypes.object,
  projects: PropTypes.object,
  education: PropTypes.object,
  workExperience: PropTypes.object,
}

export default Resume
