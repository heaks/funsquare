import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(author, comment);
    this.refs.commentForm.reset();
  }
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p><strong>{comment.author}: </strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, i)}>&times;</button>
        </p>
      </div>
    )
  }
  render() {
    console.log('Comments props: ', this.props);
    return(
      <div className="comments">
        <h1>Comments Here</h1>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
        {this.props.comments.map(this.renderComment)}
      </div>
    )
  }
}

export default Comments;