import React from 'react';
import PropTypes from 'prop-types';

// import styles from './subheader.css';
// import styles from './subheader.css';
import Layout from '../../common/Layout';

const Mission = ({ mission }) => {
  return (
    <Layout bgColor={mission.theme}>
      <h1>{mission.value}</h1>
    </Layout>
  );
};

Mission.propTypes = {
  mission: PropTypes.object.isRequired,
};

export default Mission;
