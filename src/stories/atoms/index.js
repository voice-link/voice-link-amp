import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import theme from "themes";
import { Logo, CallToAction, Avatar, BenefitItem } from "components/atoms";

import backgrounds from "../backgrounds";
import Colors from "./Colors";
import Fonts from "./Fonts";

const Frame = styled.div`
  margin: 1em;
`;

storiesOf("Atoms", module)
  .addDecorator(backgrounds)
  .add("Colors", () => (<Colors colors={theme.colors} />))
  .add("Fonts", () => (<Fonts fonts={theme.fonts} />))
  .add("Logo", () => (
    <Logo />
  ))
  .add("CallToAction", () => (
    <Frame>
      <CallToAction>Call to action</CallToAction>
    </Frame>
  ))
  .add("BenefitItem", () => (
    <Frame>
      <BenefitItem>This is a benefit, quite obviously</BenefitItem>
    </Frame>
  ));

storiesOf("Atoms/Avatars", module)
  .addDecorator(backgrounds)
  .add("Avatar 1", () => (<Avatar avatar="avatar1" />))
  .add("Avatar 2", () => (<Avatar avatar="avatar2" />))
  .add("Avatar 3", () => (<Avatar avatar="avatar3" />))
  .add("Avatar 4", () => (<Avatar avatar="avatar4" />))
  .add("Integration", () => (<Avatar avatar="integration" />))
  .add("Device 1", () => (<Avatar avatar="device1" />))
  .add("Device 2", () => (<Avatar avatar="device2" />))
  .add("AI", () => (<Avatar avatar="ai" />));
