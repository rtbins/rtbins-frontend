import React from 'react'
import PropTypes from 'prop-types'

const WorkExperience = ({ workExperience }) => {
  return (
    <div bgColor={workExperience.theme}>
      <h1>{workExperience.value}</h1>
    </div>
  )
}

WorkExperience.propTypes = {
  workExperience: PropTypes.object.isRequired,
}

export default WorkExperience
