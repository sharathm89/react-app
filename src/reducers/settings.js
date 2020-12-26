import {
  LOADING_START,
  LOADING_STOP,
  SET_ERROR,
  REMOVE_ERROR,
} from "Actions/types";

const INIT_STATE = {
  errors: [],
  loading: false,
  error: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };

    case LOADING_STOP:
      return { ...state, loading: false };

    case SET_ERROR:
      return {
        ...state,
        error: { message: action.message, status: action.status },
      };

    case REMOVE_ERROR:
      return { ...state, error: null };

    default:
      return {
        ...state,
      };
  }
};
