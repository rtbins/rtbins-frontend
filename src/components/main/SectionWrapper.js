import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SectionWrapper = (props) => {
    return (
        <section className="layout-main-content layout-main-content-bg family-sans d-flex text-center">
            {props.children}
        </section>
    );
};

export default SectionWrapper;