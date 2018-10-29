import React from 'react';
// import styles from './resume.css';
import Layout from '../common/Layout';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout bgColor="content_alt">
        <h1>Hello resume!</h1>
      </Layout>
    );
  }
}
export default Resume;
