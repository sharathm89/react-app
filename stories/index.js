import React from "react";
import * as storybook from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import reducers from "../src/reducers";

import "../src/assets/stylesheets/app.scss";

const customViewports = {
  pixel2xl: {
    name: "Pixel 2XL",
    styles: {
      width: "411px",
      height: "823px",
    },
  },
  galaxyS5: {
    name: "Galaxy S5",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  iPhoneSE: {
    name: "iPhone 5/SE",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  iPhone678: {
    name: "iPhone 6/7/8",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  iPhone678Plus: {
    name: "iPhone 6/7/8 Plus",
    styles: {
      width: "414px",
      height: "736px",
    },
  },
  iPhoneX: {
    name: "iPhone X",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  iPad: {
    name: "iPad",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  iPadPro: {
    name: "iPad Pro",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  pixel2: {
    name: "Pixel 2",
    styles: {
      width: "411px",
      height: "731px",
    },
  },
};

function storiesOf(componentName) {
  return storybook
    .storiesOf(componentName, module)
    .addDecorator(withKnobs)
    .addDecorator((story) => <React.Fragment>{story()}</React.Fragment>);
}

export function withStore(componentName, data = {}, reduxType) {
  const config = { ...data };

  const rootReducer = combineReducers({
    ...reducers,
    [reduxType]: (state = config, action) => state,
  });
  const store = createStore(rootReducer);

  return storiesOf(componentName)
    .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
    .addParameters({
      options: {
        isFullscreen: false,
        showNav: true,
        showPanel: false,
        panelPosition: "bottom",
        sidebarAnimations: true,
        enableShortcuts: true,
        isToolshown: true,
      },
      viewport: {
        viewports: {
          ...customViewports,
        },
      },
    });
}
