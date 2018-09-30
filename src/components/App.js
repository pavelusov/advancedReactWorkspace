import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Application components
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Приложение "Комментарии"</h1>
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
};

export default connect(mapStateToProps)(App);
