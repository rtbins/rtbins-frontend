import React from 'react';
import PropTypes from 'prop-types';

// import styles from './subheader.css';
// import styles from './subheader.css';
import Layout from '../../common/Layout';

const WorkExperience = ({ workExperience }) => {
  return (
    <Layout bgColor={workExperience.theme}>
      <h1>{workExperience.value}</h1>
    </Layout>
  );
};

WorkExperience.propTypes = {
  workExperience: PropTypes.object.isRequired,
};

export default WorkExperience;
