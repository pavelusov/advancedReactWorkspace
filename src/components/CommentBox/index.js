import React, { Component } from 'react';

export default class CommentBox extends Component {
  state = {
    comment: ''
  };

  onChangeTextArea = e => {
    const comment = e.target.value;
    this.setState({ comment })
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.setState({ comment: '' })
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
          >Оставить</button>
        </div>
      </form>
    );
  }
}
