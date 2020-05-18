import { combineReducers } from "redux";
import { taskReducer } from './tasks'

export const rootReducer = combineReducers({
  tasks: taskReducer
});
