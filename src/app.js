import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./js/home";

// Files
import { configureStore } from "./store";

// SCSS
import "./assets/stylesheets/app.scss";

const App = () => (
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
