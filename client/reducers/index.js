import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// Every time an action is dispatched, all the reducers run

const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer;
