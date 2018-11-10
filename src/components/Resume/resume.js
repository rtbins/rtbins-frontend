import React from 'react'
import styles from './resume.css'
import Mission from './content/mission'
import Projects from './content/projects'
import Education from './content/education'
import WorkExperience from './content/workExperience'

class Resume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mission: {
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis.',
        theme: 'yellow',
      },
      workExperience: {
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis.',
        theme: 'white',
      },
      education: {
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis.',
        theme: 'yellow',
      },
      projects: {
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis.',
        theme: 'white',
      },
    }
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
