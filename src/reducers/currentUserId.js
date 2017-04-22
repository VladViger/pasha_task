import { LOG_IN } from '../actions';

function currentUserId(state = null, action) {
	switch (action.type) {
		case LOG_IN:
			return action.id;
		default:
			return state;
	}
}

export default currentUserId;