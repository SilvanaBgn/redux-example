// This file is to clean up reducers logic
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

// We need to combine the reducers, to pass it then all packed to the createStore in index.js
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
})

export default allReducers;