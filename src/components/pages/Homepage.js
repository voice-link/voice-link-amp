import React from "react";
import Head from "next/head";
import { withTheme } from "styled-components";
import { Amp } from "react-amphtml";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import {
  Logo,
  CallToAction,
  Headline,
  SectionHeadline,
  Caption,
  Avatar,
  TextSegment,
  BenefitItem,
  MouseScroll,
  PackageActions
} from "components/atoms";
import {
  ViewSection,
  VendorLogos,
  ImageGroup,
  Benefits
} from "components/molecules";
import { Package } from "components/organisms";
import Container from "components/Container";

function Homepage() {
  return (
    <Container>
      <Head>
        <title>Voice.link | Having a great conversation</title>
      </Head>

      <ViewSection header>
        <Logo />

        <Headline>wir lieben voice</Headline>
        <Caption>Sprachassistenten + ai = wow🔥</Caption>

        <MouseScroll />
      </ViewSection>

      <ViewSection id="start">
        <SectionHeadline>
          Ein freundlicher Helfer<br />🤖
        </SectionHeadline>

        <TextSegment>
          Wir entwickeln Benutzererlebnisse und helfen deinem Unternehmen, die
          richtige Botschaft an deine Kunden zu senden. Du profitierst von
          unseren umfangreichen Kenntnissen der Sprachassistenz-Plattfomen{" "}
          <i>Amazon Alexa</i>, <i>Google Home</i> und <i>Facebook Messenger</i>.
        </TextSegment>

        <VendorLogos size={76} />

        <TextSegment>
          Verbinde deine Kundenkonten, Warenkörbe und Zahlungsvorgänge ganz
          einfach mit der jeweiligen Plattform.
        </TextSegment>

        <CallToAction href="#pakete">Schau dir an, wie das geht</CallToAction>
      </ViewSection>

      <ViewSection id="ki">
        <SectionHeadline>Künstliche Intelligenz</SectionHeadline>

        <TextSegment>
          Mit Hilfe Künstlicher Intelligenz und Intent-Recognition nehmen wir
          Dir ein paar der alltäglichen Sorgen. Deine Mitarbeiter werden
          entlastet und können sich um wirklich wichtige Dinge kümmern.
        </TextSegment>

        <ImageGroup count={2} size={240}>
          <Avatar avatar="avatar1" />
          <Avatar avatar="avatar2" />
          <Avatar avatar="avatar3" />
        </ImageGroup>

        <Benefits>
          <BenefitItem icon="✈️">engagiertere Nutzer</BenefitItem>
          <BenefitItem icon="❤️">zufriedenere Kunden</BenefitItem>
          <BenefitItem icon="🌟">effizientere Prozesse</BenefitItem>
        </Benefits>

        <CallToAction wide href="#pakete">
          Erfahre, wie es geht
        </CallToAction>
      </ViewSection>

      <ViewSection id="pakete">
        <SectionHeadline>Wähle dein Paket</SectionHeadline>

        <TextSegment>
          Wir haben drei Pakete für dich zusammengestellt. Wenn Dir eins
          gefällt, klicke auf{" "}
          <span className="call-to-action">Jetzt buchen</span>, um direkt
          loszulegen.
        </TextSegment>

        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <Package title="Basis" headline="Sprachassistent & Chatbot">
                <ul>
                  <li>
                    Gemeinsam mit deinem Team entwickeln wir das
                    Interaktionskonzept.
                  </li>
                  <li>
                    Wir entwickeln die Aktionen für Alexa, Google Home und
                    Facebook Messenger.
                  </li>
                  <li>
                    Wir kümmern uns um den reibungslosen Betrieb und die
                    hochverfügbare Einrichtung.
                  </li>
                </ul>
                <PackageActions>
                  <CallToAction href="#buchen">Jetzt buchen</CallToAction>
                </PackageActions>
              </Package>
            </Col>
            <Col xs={12} md={4}>
              <Package title="Smart" headline="Automatische Kundenbetreuung">
                <ul>
                  <li>
                    <b>
                      <i>Alles aus “Basis”</i>
                    </b>
                  </li>
                  <li>
                    Wir verarbeiten die Daten deines Unternehmens, um
                    realitätsnahe automatische Interaktionen zu ermöglichen.
                  </li>
                  <li>
                    Damit ist es möglich, die Kundenbetreuung deines
                    Unternehmens großflächig zu automatisieren.
                  </li>
                </ul>
                <PackageActions>
                  <CallToAction href="#buchen">Jetzt buchen</CallToAction>
                </PackageActions>
              </Package>
            </Col>
            <Col xs={12} md={4}>
              <Package title="Integration" headline="Handel und Kundendienst">
                <ul className="packages">
                  <li>
                    <b>
                      <i>Alles aus “Smart”</i>
                    </b>
                  </li>
                  <li>
                    Unsere Plattform kann den Warenkatalog deines Unternehmens
                    verarbeiten.
                  </li>
                  <li>
                    Wir verbinden die Konten der Kunden deines Unternehmens, um
                    Bestellungen und Bezahlungen abzuwickeln.
                  </li>
                </ul>
                <PackageActions>
                  <CallToAction href="#buchen">Jetzt buchen</CallToAction>
                </PackageActions>
              </Package>
            </Col>
          </Row>
        </Grid>
      </ViewSection>

      <ViewSection footer>
        <p>
          Voice.link Speech Interaction Design<br />
          Schillerstraße 40, 38440 Wolfsburg
        </p>

        <p>
          hello@voice.link<br />
          +49 5361 83 49 128
        </p>
      </ViewSection>
    </Container>
  );
}

export default withTheme(Homepage);
