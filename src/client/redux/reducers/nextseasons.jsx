import _ from "lodash";
import { FETCH_NEXT_SEASONS, FETCH_POST, DELETE_POST } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
      case FETCH_NEXT_SEASONS:
        return {...state, data: action.payload.data.results};
      default:
        return state;
    }
  }
  