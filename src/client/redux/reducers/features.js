import _ from "lodash";
import { FETCH_FEATURES } from "../actions/index"

export default function(state = {}, action){
    switch (action.type) {
        case FETCH_FEATURES:
            return { ...state, data: action.payload.data.results};
        default: 
            return state;
    }
}