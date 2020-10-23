import React, { Component } from "react";

class Comments extends Component {
  constructor() {
    super();

    this.state = {
      comments: [
        "hello from the other side",
        "hello from the other side",
        "hello from the other side",
        "hello from the other side",
        "hello from the other side",
        "hello from the other side",
      ],
    };
  }
  render() {
    const renderComments = this.state.comments.map((comment, index) => {
      return (
        <div className="comment" key={index}>
          <div className="user-image"></div>
          <div className="comment-details">
            <div className="head">
              <p>Santiago</p>
              <span>2 minutes ago</span>
            </div>
            <div className="body">
              <p>{comment}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="comments">
        <p className="title">Comments</p>
        <div className="comments-container">{renderComments}</div>
      </div>
    );
  }
}

export default Comments;
