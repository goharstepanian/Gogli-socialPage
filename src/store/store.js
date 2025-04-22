import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./reducers/usersReducer";
import { thunk } from "redux-thunk";
import profileReducer from "./reducers/profileReducer";
import authReducer from "./reducers/authReducer";



const rootReducer = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
