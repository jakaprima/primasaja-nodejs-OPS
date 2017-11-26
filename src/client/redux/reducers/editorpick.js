import _ from "lodash";
import { FETCH_EDITORPICK } from "../actions/index"

export default function (state = {}, action){
    switch (action.type){
        case FETCH_EDITORPICK:
            return {...state, data: action.payload.data.results};
        default:
            return state;
    }
}