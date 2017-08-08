// a reducer takes two things
// the action (info about what happened)
// copy of the current state


// ONLY CONCERNED WITH WHOLE STATE OF COMMENTS SECTION
function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      //take current state
      ...state,
      // overwrite this posts comment section with a new one
      // all this is concerned with is the state of comments
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;

}


function postComments(state = [], action) {
  // discerns which action is being called and executes state change
  switch (action.type) {
    case 'ADD_COMMENT':
      // return existing state plus new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        // from state to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state
  }

  return state
}

export default comments;
