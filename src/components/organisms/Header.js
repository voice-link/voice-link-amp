import React from "react";
import styled from "styled-components";
import { Logo, Caption, CallToAction } from "components/atoms";

const Section = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1em;
`;

export default function Header() {
  return (
    <Section>
      <Logo />

      <Caption>
        Wir verbinden Sprachassistenten aller Hersteller mit Hilfe künstlicher Intelligenz
        zu einem einzigartigen Erlebnis für ihre Kunden.
      </Caption>

      <CallToAction>Los geht&rsquo;s</CallToAction>
    </Section>
  );
}
