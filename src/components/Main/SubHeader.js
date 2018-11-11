// #region imports
import React from 'react'
import PropTypes from 'prop-types'
// #endregion

const SubHeader = ({ title }) => {
  return (
    <div>
      <h4 className="main-header-title py-1 my-1">{title}</h4>
    </div>
  )
}

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SubHeader
