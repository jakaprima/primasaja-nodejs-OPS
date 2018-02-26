import axios from "axios";

export const FETCH_TESTING_ACTION = "fetch_testing_action";

const TESTING_URL = "http://0.0.0.0:8000/";


export function fetchTestingAction() {
  const request = axios.get(`${TESTING_URL}`);
  return {
    type: FETCH_TESTING_ACTION,
    payload: request
  };
}

