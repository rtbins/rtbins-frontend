import React from 'react';
import PropTypes from 'prop-types';

import styles from './layout.css';

const Layout = (props) => {
  return (
    <section className={styles[props.bg_color]}>
      <div
        className="container
                   justify-content-center 
                   my-1">
        <div className="row">
          <div
            className="col-lg-12 
                  col-sm-12 
                  col-md-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
