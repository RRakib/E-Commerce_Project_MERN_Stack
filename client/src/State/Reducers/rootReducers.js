// Imports
import {combineReducers} from "redux";
import userReducers from "./userReducers"

// RootReducer
const rootReducer = combineReducers({
    userReducer : userReducers
})

// Exports
export default rootReducer