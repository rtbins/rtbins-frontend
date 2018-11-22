// #region imports
import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './resume.css'
// #endregion

type IProps = {
  mission?: any,
  projects?: any,
  education?: any,
  workExperience?: any
}

const Resume: React.FunctionComponent<IProps> = () => {
  return (
    <div className={styles.layout_main}>
      {/* <Mission mission={mission} />
      <Projects projects={projects} />
      <Education education={education} />
      <WorkExperience workExperience={workExperience} /> */}
    </div>
  )
}

Resume.propTypes = {
  mission: PropTypes.object,
  projects: PropTypes.object,
  education: PropTypes.object,
  workExperience: PropTypes.object,
}

Resume.defaultProps = {
  mission: {}
}

export default Resume
