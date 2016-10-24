function comments(state = [], action) {
  console.log('comment inserted');
  console.log(state, action);
  return state;
}

export default comments;