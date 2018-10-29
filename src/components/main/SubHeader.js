import React from 'react';
import PropTypes from 'prop-types';

// import styles from './subheader.css';
import Layout from '../common/Layout';

const SubHeader = ({ title }) => {
  return (
    <Layout bgColor="sub_heading">
      <h4 className="main-header-title py-1 my-1">{title}</h4>
    </Layout>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeader;
