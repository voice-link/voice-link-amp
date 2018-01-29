import { injectGlobal } from "styled-components";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Nunito|PT+Sans");

  body {
    font-family: "PT Sans", sans-serif;
    font-size: 14pt;
    font-weight: 300;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Nunito", sans-serif;
    font-weight: 300;
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
  colors: {
    pink: "hsl(307, 86%, 57%)",
    white: "white",
    darkblue: "hsl(196, 85%, 44%)",
    cyan: "hsl(195, 82%, 85%)"
  }
};
