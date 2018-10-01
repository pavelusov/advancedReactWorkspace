import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveComment, fetchComments } from '../../redux/comments/comments-actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  componentDidMount() {
    this.checkAuth();
  }

  componentDidUpdate(prevProps) {
    this.checkAuth();
  }

  checkAuth = () => {
    if(!this.props.auth) {
      console.log('вы не авторизованы');
      this.props.history.push('/')
    }
  };

  onChangeTextArea = e => {
    const comment = e.target.value;
    this.setState({ comment })
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form
          data-test='component-form'
          onSubmit={this.onSubmitForm}
        >
          <h2>Оставить комментарий</h2>
          <textarea
            data-test="component-text-area"
            value={this.state.comment}
            onChange={this.onChangeTextArea}
            name="comment"
            id="comment"
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <button
              data-test="component-submit-button"
            >Оставить
            </button>
          </div>
        </form>
        <button
          data-test="component-fetch-button"
          onClick={this.props.fetchComments}
        >Получить коментарии
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveComment: bindActionCreators(saveComment, dispatch),
    fetchComments: bindActionCreators(fetchComments, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
