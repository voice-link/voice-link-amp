import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import theme from "themes";
import { Logo, CallToAction, Avatar } from "components/atoms";

import backgrounds from "../backgrounds";
import Background from "./Background";
import Colors from "./Colors";
import Typography from "./Typography";

const Frame = styled.div`
  margin: 1em;
`;

storiesOf("Atoms", module)
  .addDecorator(backgrounds)
  .add("Background", () => <Background />)
  .add("Colors", () => <Colors colors={theme.colors} />)
  .add("Typography", () => <Typography fonts={theme.fonts} />)
  .add("Logo", () => <Logo />)
  .add("Logo dark", () => <Logo dark />)
  .add("CallToAction", () => (
    <Frame>
      <CallToAction>Call to action</CallToAction>
    </Frame>
  ));

storiesOf("Atoms/Avatars", module)
  .addDecorator(backgrounds)
  .add("Avatar 1", () => <Avatar avatar="avatar1" />)
  .add("Avatar 2", () => <Avatar avatar="avatar2" />)
  .add("Avatar 3", () => <Avatar avatar="avatar3" />);
