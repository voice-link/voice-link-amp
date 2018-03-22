import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { CallToAction, PackageActions } from "components/atoms";
import { Package } from "components/organisms";

import backgrounds from "../backgrounds";

const Frame = styled.div`
  margin: 1em;
`;

storiesOf("Organisms", module)
  .addDecorator(backgrounds)
  .add("Package", () => (
    <Frame>
      <Package title="Basis" headline="Sprachassistent & Chatbot">
        <ul>
          <li>
            Gemeinsam mit deinem Team entwickeln wir das Interaktionskonzept.
          </li>
          <li>
            Wir entwickeln die Aktionen für Alexa, Google Home oder Facebook
            Messenger.
          </li>
          <li>
            Wir kümmern uns um den reibungslosen Betrieb und die hochverfügbare
            Einrichtung.
          </li>
        </ul>
        <PackageActions>
          <CallToAction>Jetzt Buchen</CallToAction>
        </PackageActions>
      </Package>
    </Frame>
  ));
