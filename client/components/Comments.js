import React from 'react';

class Comments extends React.Component {
  renderComments() {
    return (
      <div className="comment">
        <p>
          <strong>{comment.author}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }
  render() {
    return(
      <div className="comments">
        <h1>Comments Here</h1>
        TODO: fix comments using renderComments
        <div className="new-comment">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </div>
      </div>
    )
  }
}

export default Comments;