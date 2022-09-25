import axios from "axios";
import {
  GET_DINNER,
  SET_ERROR,
  SET_LOADING,
} from "../constants/action-types";

const options = {
  method: "GET",
  url: "https://keto-diet.p.rapidapi.com/",
  params: { protein_in_grams__lt: "15", protein_in_grams__gt: "5" },
  headers: {
    "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
    "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
  },
};

export function getDinner() {
  return function (dispatch) {
    dispatch({ type: SET_LOADING, payload: true });
    return axios
      .request(options)
      .then(function (response) {
        console.log(response);
        dispatch({ type: GET_DINNER, payload: response.data });
      })
      .catch(function (error) {
        console.error(error);
        dispatch({ type: SET_ERROR, payload: error.message });
      });
  };
}
