import { LOADING_START, LOADING_STOP } from "./types";

export const startLoading = () => (dispatch) => {
  dispatch({ type: LOADING_START });
};

export const stopLoading = () => (dispatch) => {
  dispatch({ type: LOADING_STOP });
};
