import {
    ADD_TODO, 
    CHANGE_ALL_DONE_TODO, 
    GET_ALL_DONE_TODO, 
    GET_DONE_TODO, 
    GET_RENAME_TODO, 
    DELETE_TODO, 
    DELETE_DONE_TASKS, 
    DELETE_ALL_TASKS
} from "./todoTypes"

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export const changeAllTodoDone = (isDone) => {
    return {
        type: CHANGE_ALL_DONE_TODO,
        payload: isDone
    }
}

export const getAllTodoDone = (doneTodo) => {
    return {
        type: GET_ALL_DONE_TODO, 
        payload: doneTodo
    }
}


export const getDoneTodo = (todoId) => {
    return {
        type: GET_DONE_TODO,
        payload: {
            todoId
        }
    }
}

export const setRenameTodo = (todoId, renameTodoTitle) => {
    return {
        type: GET_RENAME_TODO,
        payload: {
            todoId,
            renameTodoTitle
        }
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: {
            todoId
        }
    }
}

export const deleteDoneTasks = () => {
    return {
        type: DELETE_DONE_TASKS,
        payload: true
    }
}

export const deleteAllTasks = () => {
    return {
        type: DELETE_ALL_TASKS,
        payload: []
    }
}