/* eslint global-require: 0 */
import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "themes";

const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    { storyFn() }
  </ThemeProvider>
);

function loadStories() {
  addDecorator(GlobalStyleDecorator);
  require('stories/index.js');
}

configure(loadStories, module);
