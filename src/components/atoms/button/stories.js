import React from "react";

import { withStore } from "../../../../stories";
import Button from "./index";

withStore("Atoms/Button")
  .add("type1", () => (
    <Button content="Log In" type="type1" onClick={() => {}} />
  ))
  .add("type2", () => (
    <Button content="Submit" type="type2" onClick={() => {}} />
  ));
