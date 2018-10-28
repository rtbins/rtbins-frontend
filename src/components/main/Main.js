import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SectionWrapper from './SectionWrapper';
import Resume from '../resume/Resume';
import Header from '../common/Header';

/*
justify-content-center: to align an element
*/

const Main = () => {
  return (
    <SectionWrapper>
      <Header title={'Resume'} />
      <Route path="/" exact component={Header} />
      <Route path="/courses" exact component={Resume} />
    </SectionWrapper>
  );
};

export default Main;
