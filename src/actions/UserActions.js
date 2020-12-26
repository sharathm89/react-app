import { LOADING_START, LOADING_STOP, SET_ERROR } from "./types";
import Api from "Api";

export const getUserDetails = (id) => (dispatch) => {
  dispatch({ type: LOADING_START });

  return Api()
    .get(`v1/user/member/${id}`)
    .then((response) => response.data)
    .catch((err) => {
      dispatch({
        type: SET_ERROR,
        message: err.error,
        status: err.status,
      });
    })
    .finally(() => dispatch({ type: LOADING_STOP }));
};
