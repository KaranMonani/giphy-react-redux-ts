import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "../reducers/dataReducers"

export const store = createStore(
    reducers,
    0,
    applyMiddleware(thunk)
)