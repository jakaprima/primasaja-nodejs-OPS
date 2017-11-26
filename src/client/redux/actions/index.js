import axios from "axios";

export const FETCH_NEXT_SEASONS = "fetch_next_seasons";
export const FETCH_FEATURES = "fetch_features";
export const FETCH_EDITORPICK = "fetch_editorpick"

const NEXT_SEASONS_URL = "http://dev.oprent.com/api/v1/next-seasons/";
const FEATURES_URL = "http://dev.oprent.com/api/v1/features/features/";
const EDITORPICK_URL  = "http://dev.oprent.com/api/v1/raw_products/?ordering=our_picks&page=1";

export function fetchNextSeasons() {
  const request = axios.get(`${NEXT_SEASONS_URL}`);
  return {
    type: FETCH_NEXT_SEASONS,
    payload: request
  };
}

export function fetchEditorPick() {
  const request = axios.get(`${EDITORPICK_URL}`);
  return {
    type: FETCH_EDITORPICK,
    payload: request
  }  
}

export function fetchFeatures(){
  const request = axios.get(`${FEATURES_URL}`);
  return {
    type: FETCH_FEATURES,
    payload: request
  }
}
