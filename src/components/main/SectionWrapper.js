import React from 'react';
import PropTypes from 'prop-types';

/*
text-center: to align text
*/

const SectionWrapper = ({ children }) => {
  return (
    <section
      className="layout-main-content
                layout-main-content-bg
                family-sans
                d-flex"
    >
      <div className="container">{children}</div>
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node,
};

export default SectionWrapper;
