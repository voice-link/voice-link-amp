import React from "react";
import Head from "next/head";

import {
  Logo,
  CallToAction,
  Headline,
  SectionHeadline,
  Caption,
  HeadAndClaim,
  Avatar,
  TextSegment,
  BenefitItem,
  MouseScroll
} from "components/atoms";
import {
  ViewSection,
  VendorLogos,
  ImageGroup,
  Benefits
} from "components/molecules";
import Container from "components/Container";

export default function Homepage() {
  return (
    <Container>
      <Head>
        <title>Voice.link | Having a great conversation</title>
      </Head>

      <ViewSection header>
        <Logo />

        <HeadAndClaim>
          <Headline>
            Wir sind fasziniert von Sprache
          </Headline>
          <Caption>Sprachassistenten + ai = wow🔥</Caption>
        </HeadAndClaim>

        <MouseScroll />
      </ViewSection>

      <ViewSection id="start">
        <SectionHeadline>🤖 ein freundlicher Helfer</SectionHeadline>

        <TextSegment>
          Wir entwickeln Benutzererlebnisse und helfen deinem Unternehmen, die richtige
          Botschaft an deine Kunden zu senden. Du profitierst von unseren umfangreichen Kenntnissen der
          Sprachassistenz-Plattfomen <i>Amazon Alexa</i>, <i>Google Home</i> und <i>Facebook Messenger</i>.
        </TextSegment>

        <VendorLogos size={76} />

        <TextSegment>
          Verbinde deine Kundenkonten, Warenkörbe und Zahlungsvorgänge ganz einfach mit der jeweiligen Plattform.
        </TextSegment>

        <CallToAction href="#pakete">Schau dir an, wie das geht</CallToAction>
      </ViewSection>

      <ViewSection id="ki">
        <SectionHeadline>Künstliche Intelligenz</SectionHeadline>

        <TextSegment>
          Mit Hilfe Künstlicher Intelligenz und Intent-Recognition nehmen wir Dir
          ein paar der alltäglichen Sorgen.
          Deine Mitarbeiter werden entlastet und können sich um
          wirklich wichtige Dinge kümmern.
        </TextSegment>

        <ImageGroup count={2} size={240}>
          <Avatar avatar="avatar1" />
          <Avatar avatar="avatar2" />
          <Avatar avatar="avatar3" />
        </ImageGroup>

        <Benefits>
          <BenefitItem icon="✈️">
            engagiertere Nutzer
          </BenefitItem>
          <BenefitItem icon="❤️">
            zufriedenere Kunden
          </BenefitItem>
          <BenefitItem icon="🌟">
            effizientere Prozesse
          </BenefitItem>
        </Benefits>

        <CallToAction wide href="#pakete">Erfahre, wie es geht</CallToAction>
      </ViewSection>

      <ViewSection id="pakete">
        <SectionHeadline>Wähle dein Paket</SectionHeadline>

        <TextSegment>
          Wir haben drei Pakete für dich zusammengestellt. Wenn Dir eins gefällt,
          klicke auf <span className="call-to-action">Jetzt buchen</span>, um direkt loszulegen.
        </TextSegment>

        <h3>Amazon Alexa oder Google Home</h3>

        <ul className="packages">
          <li>Anmelden und Zertifizieren Skill / Action</li>
          <li>Erstellung Interaktionskonzept</li>
          <li>Entwicklung Sprachinhalte (Dialog-Design)</li>
          <li>Branding</li>
        </ul>

        <CallToAction href="#buchen">Jetzt buchen</CallToAction>

        <h3>Facebook Messenger oder eigene Chat-Plattform</h3>

        <ul className="packages">
          <li>Erstellung Interaktionskonzept</li>
          <li>Entwicklung Sprachinhalte (Dialog-Design)</li>
          <li>Branding</li>
          <li>Webentwicklung</li>
        </ul>

        <CallToAction href="#buchen">Jetzt buchen</CallToAction>

        <h3>Dynamische Web-Dienste & KI</h3>

        <ul className="packages">
          <li><b><i>Alles aus “Dabeisein ist Alles”</i></b></li>
          <li>Erstellung technisches Konzept</li>
          <li>Programmierung Datenschnittstelle</li>
          <li>Kundenkonto von Amazon, Google oder Messenger Platform</li>
          <li>
            Natural Language Processing (NLP) für realitätsnahe
            konversationelle Interaktion
          </li>
        </ul>

        <CallToAction href="#buchen">Jetzt buchen</CallToAction>

        <h3>Integration für Handel und Kundendienst</h3>

        <ul className="packages">
          <li>
            <b><i>Alles aus “Dabeisein ist Alles” und “Context is God”</i></b>
          </li>
          <li>Warenkorb</li>
          <li>Checkout/Payment-Prozess</li>
          <li>Waren- und Kundendaten (WaWi & CRM)</li>
        </ul>

        <CallToAction href="#buchen">Jetzt buchen</CallToAction>
      </ViewSection>

      <ViewSection footer>
        <p>
        Voice.link Speech Interaction Design<br/>
        Schillerstraße 40, 38440 Wolfsburg
        </p>

        <p>
        hello@voice.link<br/>
        +49 5361 83 49 128
        </p>
      </ViewSection>

    </Container>
  );
}
