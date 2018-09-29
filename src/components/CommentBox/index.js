import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveComment } from '../../redux/comments/comments-actions';

class CommentBox extends Component {
  state = {
    comment: ''
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
      <form onSubmit={this.onSubmitForm}>
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
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveComment: bindActionCreators(saveComment, dispatch)
  }
};
export default connect(null, mapDispatchToProps)(CommentBox);