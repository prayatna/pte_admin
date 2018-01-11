import {applyMiddleware, createStore} from "redux"

import {createLogger} from "redux-logger"
import thunk from "redux-thunk"

import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger()


export default createStore(
    rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunk, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);