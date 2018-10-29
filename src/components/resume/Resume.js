import React from 'react';
import styles from './resume.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={styles.main}>
        <h1>Hello resume!</h1>
      </section>
    );
  }
}
export default Resume;
