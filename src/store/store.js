import {legacy_createStore, compose} from "redux";
import {reducer} from "./reducer/index";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(reducer, composeEnhancers())