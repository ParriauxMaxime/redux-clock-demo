
import { combineReducers } from 'redux';

const initialState = {
	date: new Date(Date.now()),
	color: "blue"
};

const timeReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'TICK':
			return Object.assign({}, ...state, { date: new Date(Date.now()) });
			break;
		case 'CHANGE_COLOR':
			return Object.assign({}, ...state, { color: "green" });
		default:
			return state;
	}
};

const reducers = combineReducers({
	timeReducers,
});

export default reducers