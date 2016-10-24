function comments(state = [], action) {
    switch(action.type) {
      case 'ADD_COMMENT':
        console.log('adding a comment');
        // return the new state with the new comment
        return [...state, {
          author: action.author,
          text: action.comment
        }];
      case 'REMOVE_COMMENT':
        console.log('removing comment');
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
      default:
        return state;
    }
}

export default comments;