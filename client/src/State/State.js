// Imports
import {createStore} from "redux"
import rootReducer from "./Reducers/rootReducers"

// Creating Store
const store = createStore(rootReducer)

// Exports
export default store;