import React from 'react'
import PropTypes from 'prop-types'

// import styles from './subheader.css';
// import styles from './subheader.css';

const Mission = ({ mission }) => {
  return (
    <div bgColor={mission.theme}>
      <h1>{mission.value}</h1>
    </div>
  )
}

Mission.propTypes = {
  mission: PropTypes.object.isRequired,
}

export default Mission
