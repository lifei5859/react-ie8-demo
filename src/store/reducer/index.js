import { combineReducers } from 'redux';
import counterReducer from './countReducer';
import todoList from './TodoListReducer';

// console.log(combineReducers({
//     counterReducer,
//     todoList
// }))

export default combineReducers({
    counterReducer,
    todoList
});
