import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// custom imports
import Footer from './common/Footer';
import Nav from './navigation/Nav';
import Main from './main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Main />
            <Footer />
            {/* <Game/> */}
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  // children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);
