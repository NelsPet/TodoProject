import {
    ADD_TODO, 
    CHANGE_ALL_DONE_TODO, 
    GET_ALL_DONE_TODO,  
    GET_DONE_TODO, 
    GET_RENAME_TODO, 
    DELETE_TODO,
    DELETE_DONE_TASKS,
    DELETE_ALL_TASKS
} from "../actions/todoTypes"

const initialState = {
    todo: [
        {title: 'Learn Html',isDone: false,  id: 1},
        {title: 'Learn Css', isDone: false, id: 2},
        {title: 'Learn Js', isDone: false, id: 3},
        {title: 'Learn React', isDone: false, id: 4}
    ]
}

export const todoReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload],
            }

        case  CHANGE_ALL_DONE_TODO:
            return {
                ...state,
                todo: state.todo.map((elem) => elem.isDone !== action.payload.isDone ? {...elem, isDone: !elem.isDone } : {...elem, isDone: action.payload})
            }

        case GET_ALL_DONE_TODO: 
            return {
                ...state,
                todo: state.todo.map((elem) => elem.isDone === action.payload.doneTodo ? {...elem, todo: elem} : <div></div>)
            }
            
        // case GET_TODO_TODO:
        //     return {
        //         ...state,
        //         todo: state.todo.filter((elem) => elem.isDone !== true)
        //     }
        
        case GET_DONE_TODO:
            return {
                ...state,
                todo: state.todo.map((elem) => elem.id === action.payload.todoId ? {...elem, isDone: !elem.isDone } : elem)
            }
        
        case  GET_RENAME_TODO:
            return {
                ...state,
                todo: state.todo.map((elem) => elem.id === action.payload.todoId ? {...elem, title: action.payload.renameTodoTitle } : elem)
            }

        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((elem) => elem.id !== action.payload.todoId),
            }

        case DELETE_DONE_TASKS:
            return {
                ...state,
                todo: state.todo.filter((elem) => elem.isDone !== action.payload)
            }
        
        case DELETE_ALL_TASKS:
            return {
                ...state, 
                todo: state.todo = action.payload
            }
            
        default:
            return state;
    }
}