import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import MainApp from "./container";

import loadFonts from "Helpers/font";
import { configureStore } from "./store";

const App = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route path="/" component={MainApp} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
