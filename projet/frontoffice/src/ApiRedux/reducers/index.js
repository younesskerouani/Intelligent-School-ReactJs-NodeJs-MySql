import { combineReducers } from "redux";

import authReducer from './authReducer';
import userReducer from "./userReducer";
import forumReducer from "./forumReducer";
import eventsReducer from "./eventsReducer";
import articleReducer from "./articleReducer";

export const reducers = combineReducers({ authReducer, userReducer,forumReducer,eventsReducer,articleReducer});