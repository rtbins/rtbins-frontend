import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './header/Header'
import Footer from './common/Footer'
import { connect } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                  <div>
                    <Header
                      loading={this.props.loading} />
                    <Footer/>
                  </div>
                </Router>
            </div>
        );
    }
}

App.propTypes = {
    //children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);