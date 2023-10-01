 
import { combineReducers } from "redux"
import { todoReducer } from "./todosReducer"

export const reducer = combineReducers({
    todoReducer,
})