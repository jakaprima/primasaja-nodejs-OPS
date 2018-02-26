import { combineReducers } from 'redux';
import testingReducer from "./testing_reducer";


const rootReducer = combineReducers({
  testing_reducer: testingReducer,
});

export default rootReducer;
