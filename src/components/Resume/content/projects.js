import React from 'react'
import PropTypes from 'prop-types'

const Projects = ({ projects }) => {
  return (
    <div bgColor={projects.theme}>
      <h1>{projects.value}</h1>
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.object.isRequired,
}

export default Projects
