import React from "react";

import { withStore } from "../../../../stories";
import Button from "./index";

withStore("Atoms/Button").add("default", () => (
  <Button content="Login" onClick={() => {}} />
));
