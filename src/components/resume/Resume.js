import React from 'react';
import AuthorApi from '../../api/mockAuthorApi';
import EducationCard from './EducationCard';
import styles from './resume.css';

const createHeader = (header) => {
  return {
    personName: header ? `${header.firstName} ${header.lastName}` : '1 ',
    personBrief: header ? header.objective : '2',
  };
};

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: createHeader(),
    };
  }

  render() {
    const resumeData = AuthorApi.getAllFields().then((a) => {
      const head = a.filter((e) => e.id === 'header')[0];
      const header = createHeader(head);
      this.setState({ header });

      // const _education = a.filter((e) => e.id === 'education')[0];
      // const education = getEducation(_education);
    });
    const cards = [1, 2, 3, 4, 5, 6].map((v, i) => {
      return <EducationCard key={i} />;
    });
    return (
      <section className={styles.main}>
        <h1>Hello resume!</h1>
      </section>
    );
  }
}
export default Resume;
