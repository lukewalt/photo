// a reducer takes two things
// the action (info about what happened)
// copy of the current state

function comments(state = [], action) {
  console.log('adding comments');
  switch(action.type){
    case 'ADD_COMMENT' :
      
    default:
      return state
  }

  return state;
}

export default comments;
