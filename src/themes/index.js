import { injectGlobal } from "styled-components";
import colors from "./colors";
import fonts from "./fonts";
import flexboxgrid from "./flexboxgrid";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Nunito|PT+Sans");

  body {
    ${fonts.body}
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

  span.call-to-action {
    border: 2px dotted ${colors.almostblack};
    border-radius: 0.5em;
    padding: 0.2em 0.4em;
    white-space: nowrap;
  }
`;

export default {
  colors,
  fonts,
  flexboxgrid
};
