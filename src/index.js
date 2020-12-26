import React from "react";
import ReactDom from "react-dom";

import Home from "./js/home";

import "./stylesheets/app.scss";

const App = () => {
  return (
    <div styleName="container">
      <Home />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
