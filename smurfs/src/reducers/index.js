import * as types from "../actions/index";

export const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_START:
      return { ...state, fetchingSmurfs: true };
    case types.FETCH_SUCCESS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case types.FETCH_FAIL:
      return { ...state, error: action.payload, fetchingSmurfs: false };
    default:
      return state;
  }
};
