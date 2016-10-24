export function addComment(author = 'Anonymous', comment) {
  return {
    type: 'ADD_COMMENT',
    author,
    comment
  }
}

export function removeComment(commentId) {
  return {
    type: 'REMOVE_COMMENT',
    commentId
  }
}

