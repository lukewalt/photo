// a reducer takes two things
// the action (info about what happened)
// copy of the current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
