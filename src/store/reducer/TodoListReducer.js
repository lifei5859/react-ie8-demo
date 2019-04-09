import * as types from '../actionTypes';

const data = {
    user: '',
    content: '',
    todoList: [
        {
            user: 'dandan',
            content: 'react不好搞'
        }
    ]
}


export default (state = data, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case types.USER_VAL_CHANGE:
            newState.user = action.value;
            return newState;
        case types.CONTENT_VAL_CHANGE:
            newState.content = action.value;
            return newState;
        case types.ADD_LIST_ITEM:
            newState.todoList.unshift(action.value);
            newState.user = '';
            newState.content = '';
            return newState;
        case types.REMOVE_LIST_ITEM:
            newState.todoList.splice(action.value, 1);
            return newState;
        default:
            console.log('go');
    }
    return state;
}