import React from 'react';
import PropTypes from 'prop-types';

// import styles from './subheader.css';
// import styles from './subheader.css';
import Layout from '../../common/Layout';

const Projects = ({ projects }) => {
  return (
    <Layout bgColor={projects.theme}>
      <h1>{projects.value}</h1>
    </Layout>
  );
};

Projects.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default Projects;
