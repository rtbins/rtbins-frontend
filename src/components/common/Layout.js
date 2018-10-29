import React from 'react';
import PropTypes from 'prop-types';

import styles from './layout.css';

const Layout = ({ bgColor, children }) => {
  return (
    <section className={styles[bgColor]}>
      <div
        className="container
                   justify-content-center"
      >
        <div className="row">
          <div
            className="col-lg-12
                  col-sm-12
                  col-md-12"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string.isRequired,
};

export default Layout;
