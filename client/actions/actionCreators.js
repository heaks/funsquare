export function addComment(author = 'Anonymous', comment) {
  console.log('dispatching a comment');
  return {
    type: 'ADD_COMMENT',
    author,
    comment
  }
}

export function removeComment(index) {
  return {
    type: 'REMOVE_COMMENT',
    index
  }
}

