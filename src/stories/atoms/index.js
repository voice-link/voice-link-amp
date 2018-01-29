import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import theme from "themes";
import { Logo, CallToAction, Avatar, BenefitItem } from "components/atoms";

import backgrounds from "../backgrounds";
import { ColorCards } from "../ColorCards";

const Frame = styled.div`
  margin: 1em;
`;

storiesOf("Atoms", module)
  .addDecorator(backgrounds)
  .add("Logo", () => (
    <Logo />
  ))
  .add("CallToAction dark", () => (
    <Frame>
      <CallToAction onClick={action("clicked")}>Call to action dark</CallToAction>
    </Frame>
  ))
  .add("CallToAction light", () => (
    <Frame>
      <CallToAction light>Call to action light</CallToAction>
    </Frame>
  ));

storiesOf("Atoms", module)
  .add("Colors", () => (<ColorCards colors={theme.colors} />));

storiesOf("Atoms/Avatars", module)
  .add("Avatar 1", () => (<Avatar avatar="avatar1" />))
  .add("Avatar 2", () => (<Avatar avatar="avatar2" />))
  .add("Avatar 3", () => (<Avatar avatar="avatar3" />))
  .add("Avatar 4", () => (<Avatar avatar="avatar4" />))
  .add("Integration", () => (<Avatar avatar="integration" />))
  .add("Device 1", () => (<Avatar avatar="device1" />))
  .add("Device 2", () => (<Avatar avatar="device2" />))
  .add("AI", () => (<Avatar avatar="ai" />));

storiesOf("Atoms", module)
  .add("BenefitItem", () => (
    <Frame>
      <BenefitItem>This is a benefit, quite obviously</BenefitItem>
    </Frame>
  ));
