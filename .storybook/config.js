/* eslint global-require: 0 */
import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "themes";
import {
  AmpScripts,
  AmpScriptsManager,
  // headerBoilerplate,
} from "react-amphtml";

const ampScripts = new AmpScripts();

const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    { storyFn() }
  </ThemeProvider>
);

const AmpScriptsDecorator = storyFn => (
  <AmpScriptsManager ampScripts={ampScripts}>
    { storyFn() }
  </AmpScriptsManager>
);

function loadStories() {
  addDecorator(GlobalStyleDecorator);
  addDecorator(AmpScriptsDecorator);
  require('stories/index.js');
}

configure(loadStories, module);
