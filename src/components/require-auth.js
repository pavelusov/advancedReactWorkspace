import React, { Component } from 'react'
import { connect } from 'react-redux';

export default function requireAuth(ChildComponent) {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth = () => {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    };

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  };

  return connect(mapStateToProps)(ComposedComponent);
}
