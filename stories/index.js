import React from "react";
import * as storybook from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import "../src/assets/stylesheets/app.scss";

function storiesOf(componentName) {
  return storybook
    .storiesOf(componentName, module)
    .addDecorator(withKnobs)
    .addDecorator((story) => <React.Fragment>{story()}</React.Fragment>);
}

export function withStore(componentName) {
  return storiesOf(componentName).addParameters({
    options: {
      showPanel: true,
      panelPosition: "bottom",
    },
  });
}
