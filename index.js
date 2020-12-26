import React from "react";
import ReactDom from "react-dom";

import App from "./src/app";

require("./src/assets/stylesheets/app.scss");

ReactDom.render(<App />, document.getElementById("root"));
