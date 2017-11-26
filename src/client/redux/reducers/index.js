import { combineReducers } from 'redux';
import featuresReducer from "./features.js";
import editorPickReducer from "./editorpick.js"
import nextSeasonsReducer from "./nextseasons.js";


const rootReducer = combineReducers({
  features_state: featuresReducer,
  editor_pick_state: editorPickReducer,
  next_seasons_state: nextSeasonsReducer,

});

export default rootReducer;
