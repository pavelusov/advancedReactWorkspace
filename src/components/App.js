import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link } from 'react-router-dom';

// Application components
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// actions
import { changeAuth } from "../redux/auth/auth-actions";

class App extends Component {
  renderButton = () => {
    const signInButton = () => {
      return (
        <button
          onClick={() => this.props.actions.changeAuth(true)}
        >Войти</button>
      )
    };

    const signOutButton = () => {
      return (
        <button
          onClick={() => this.props.actions.changeAuth(false)}
        >Выйти</button>
      )
    };

    return (
      <div data-test="sign-button">
        {
          this.props.auth
            ? signOutButton()
            : signInButton()
        }
      </div>
    )
  };

  renderHeader = () => {
    return (
      <ul data-test='header-nav'>
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
        <Route path='/post' component={CommentBox}/>
        <Route path='/' exact component={CommentList}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    auth: state.auth
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      changeAuth: bindActionCreators(changeAuth, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
