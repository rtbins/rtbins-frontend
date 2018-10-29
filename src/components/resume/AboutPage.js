import React from 'react';

// TODO: implement layout for resume
// TODO: implement timeline feature
class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container">
        <div>
          <h1>Resume</h1>
          <p>This is the resume section with my work</p>
        </div>
      </section>
    );
  }
}
export default Resume;
