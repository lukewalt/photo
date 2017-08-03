import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-redux';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';
