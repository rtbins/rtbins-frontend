import React from 'react';
import PropTypes from 'prop-types';

// import styles from './subheader.css';
// import styles from './subheader.css';
import Layout from '../../common/Layout';

const Education = ({ education }) => {
  return (
    <Layout bgColor={education.theme}>
      <h1>{education.value}</h1>
    </Layout>
  );
};

Education.propTypes = {
  education: PropTypes.object.isRequired,
};

export default Education;
