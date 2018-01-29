import React from "react";
import { storiesOf } from "@storybook/react";
import Homepage from "pages";

storiesOf("Pages", module)
  .add("Homepage", () => (
    <Homepage />
  ));
