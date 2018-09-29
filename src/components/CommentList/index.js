import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments = () => {
    return (
      <ul>
        {
          this.props.comments.map((comment, i) => (
            <li key={i}>{comment}</li>
          ))
        }
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderComments()}
      </div>
    )
  }
}

const mapStateToProps = ({comments}) => {
  return {
    comments
  }
};

export default connect(mapStateToProps)(CommentList);
