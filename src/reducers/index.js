
import { combineReducers } from 'redux';

const initialState = {
    date: new Date(Date.now())
}

const timeReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'TICK':
            return Object.assign({}, ...state, {date: new Date(Date.now())})
        default:
            return state;
    }
}

const reducers = combineReducers({
    timeReducers,
})

export default reducers