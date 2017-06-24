
import { combineReducers } from 'redux';

const initialState = {
	date: new Date(Date.now()),
	color: "blue"
};

const timeReducers = (state = initialState, action) => {
	// if (action.type !== "TICK")
	// 	console.log("ACTION = " + action.type);
	switch (action.type) {
		case 'TICK':
			return Object.assign({}, ...state, { date: new Date(Date.now()) });
			break;
		default:
			return state;
	}
};

const reducers = combineReducers({
	timeReducers,
});

export default reducers