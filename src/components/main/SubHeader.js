import React from 'react';
import PropTypes from 'prop-types';

import styles from './subheader.css';
import Layout from '../common/layout/Layout';

const SubHeader = ({ title }) => {
  return (
    <Layout bg_color={'sub_heading'}>
      <h4 className="main-header-title py-1">{title}</h4>
    </Layout>
  );
};

export default SubHeader;
