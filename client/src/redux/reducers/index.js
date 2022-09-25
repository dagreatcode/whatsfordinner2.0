import {
  GET_DINNER,
  // GET_MY_MY_DINNER,
  SET_ERROR,
  SET_LOADING,
} from "../constants/action-types";

const initialState = {
  dinner: [],
  // myDinner: [],
  error: "",
  loading: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_DINNER) {
    console.log(action.payload);
    return Object.assign({}, state, {
      dinner: action.payload,
      loading: false,
    });
  }
  // if (action.type === MY_DINNER) {
  //   // console.log(action.payload);
  //   return Object.assign({}, state, {
  //     myDinner: action.payload,
  //     loading: false,
  //   });
  // }
  if (action.type === SET_ERROR) {
    console.log(action.payload);
    return Object.assign({}, state, { error: action.payload });
  }
  if (action.type === SET_LOADING) {
    console.log(action.payload);
    return Object.assign({}, state, { loading: action.payload });
  }
  return state;
}

export default rootReducer;
