
import { combineReducers } from 'redux';

const initialState = {
    date: new Date(Date.now()),
    color: 'black'
}

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const timeReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'TICK':
            return Object.assign({}, ...state, { date: new Date(Date.now()) })
        case 'CHANGE_COLOR': {
            return Object.assign({}, ...state, { color: getRandomColor()})
        }
        default:
            return state;
    }
}

const reducers = combineReducers({
    timeReducers,
})

export default reducers