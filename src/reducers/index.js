import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentUserId from './currentUserId';
import entries from './entries';
import allowNewEntry from './allowNewEntry';

const rootReducer = combineReducers({
	currentUserId,
	entries,
	allowNewEntry,
	router: routerReducer
});

export default rootReducer;