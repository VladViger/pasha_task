import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentUserId from './currentUserId';
import entries from './entries';

const rootReducer = combineReducers({
	currentUserId,
	entries,
	router: routerReducer
});

export default rootReducer;