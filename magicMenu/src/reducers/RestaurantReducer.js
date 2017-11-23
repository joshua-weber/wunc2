import {
	RESTAURANT_LIST_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RESTAURANT_LIST_FETCH:
			return action.payload;
		default: 
			return state;
	}
}