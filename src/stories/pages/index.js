import React from "react";
import { storiesOf } from "@storybook/react";
import { Homepage, Imprint } from "components/pages";

storiesOf("Pages", module)
  .add("Homepage", () => <Homepage />)
  .add("Imprint", () => <Imprint />);
