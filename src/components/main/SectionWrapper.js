import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
text-center: to align text
*/

const SectionWrapper = (props) => {
  return (
    <section
      className="layout-main-content
                layout-main-content-bg
                family-sans
                d-flex
                ">
      <div className="container">{props.children}</div>
    </section>
  );
};

export default SectionWrapper;
