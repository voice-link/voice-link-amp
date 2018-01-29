import { injectGlobal } from "styled-components";
import colors from "./colors";
import fonts from "./fonts";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Nunito|PT+Sans");

  body {
    ${Object.keys(fonts.body)
    .map(propName => `${propName}: ${fonts.body[propName]};`)}
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.headline["font-family"]};
    font-weight: ${fonts.headline["font-weight"]};
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1.4em;
  }

  h4 {
    font-size: 1.1em;
  }
`;

export default {
  colors,
  fonts
};
