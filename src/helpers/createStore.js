import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const USERS_LOADED = "USERS_LOADED";
const FETCH_CURRENT_USER_SUCCESS = "FETCH_CURRENT_USER_SUCCESS";
const ADMINS_LOADED = "ADMINS_LOADED";

const usersReducer = (initialState = [], action) => {
  switch (action.type) {
    case USERS_LOADED:
      return action.payload;
    default:
      return initialState;
  }
};

const adminsReducer = (initialState = [], action) => {
  switch (action.type) {
    case ADMINS_LOADED:
      return action.payload;
    default:
      return initialState;
  }
};

const authReducer = (initialState = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_SUCCESS:
      return action.payload;
    default:
      return initialState;
  }
};

const rootReducer = combineReducers({
  users: usersReducer,
  admins: adminsReducer,
  auth: authReducer
});

export default config => {
  return configureStore({
    reducer: rootReducer,
    ...config
  });
};
