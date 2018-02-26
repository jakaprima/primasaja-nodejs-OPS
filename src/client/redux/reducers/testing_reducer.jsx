import _ from "lodash";
import { FETCH_TESTING_ACTION } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
      case FETCH_TESTING_ACTION:
        return {...state, data: action.payload.data};
      default:
        return state;
    }
  }
  