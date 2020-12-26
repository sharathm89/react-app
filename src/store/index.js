import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";

import reducers from "../reducers";

export function configureStore(initialState) {
  const rootReducer = (state, action) => {
    return reducers(state, action);
  };

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(Thunk))
  );

  return store;
}
