import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import MainApp from "./container";

import { configureStore } from "./store";

require("./assets/stylesheets/app.scss");

const App = () => (
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route path="/" component={MainApp} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
