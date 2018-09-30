import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

// Application components
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  renderButton = () => {
    return (
      <div>вход</div>
    )
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Главная</Link>
        </li>
        <li>
          <Link to='/post'>Написать комментарий</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
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
