import { COUNT_ADD } from '../actionTypes';

const data = {
    num: 0
}

export default (state=data, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case COUNT_ADD:
            newState.num++;
            return newState;
        default:
            console.log('go');
    }
    return state;
}