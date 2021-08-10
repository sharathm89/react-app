import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import loadFonts from "Helpers/font";

import "../src/assets/stylesheets/app.scss";

loadFonts();

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
