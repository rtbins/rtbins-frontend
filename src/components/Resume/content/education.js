import React from 'react'
import PropTypes from 'prop-types'

const Education = ({ education }) => {
  return (
    <div bgColor={education.theme}>
      <h1>{education.value}</h1>
    </div>
  )
}

Education.propTypes = {
  education: PropTypes.object.isRequired,
}

export default Education
