import * as types from '../actionTypes';

export const addTodoListItem = (value) => ({
    type: types.ADD_LIST_ITEM,
    value
})
export const todoListChangeUser = (value) => ({
    type: types.USER_VAL_CHANGE,
    value
})
export const todoListChangeContent = (value) => ({
    type: types.CONTENT_VAL_CHANGE,
    value
})
export const todoListRemoveItem = (index) => ({
    type: types.REMOVE_LIST_ITEM,
    index
})
