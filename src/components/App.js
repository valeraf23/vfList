/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import Routes from '../routes';
import Header from './common/Header';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.PureComponent {

  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} totalCourses={this.props.totalCourses.length}/>
        <div className="container-fluid">
          <Routes/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
   loading: PropTypes.bool.isRequired,
   totalCourses: PropTypes.array.isRequired
};

function mapStateToProps(state){

  return {
    loading: state.ajaxCallsInProgress > 0,
    totalCourses: state.courses
  };
}

export default withRouter(connect(mapStateToProps)(App));
