import React from "react";
import Head from "next/head";

import {
  Logo,
  CallToAction,
  Caption,
  Avatar,
  TextSegment,
  BenefitItem
} from "components/atoms";
import {
  ViewSection,
  VendorLogos,
  ImageGroup,
  Benefits
} from "components/molecules";
import { Header } from "components/organisms";
import Container from "components/Container";

export default function Homepage() {
  return (
    <Container>
      <Head>
        <title>Voice.link | Having a great conversation</title>
      </Head>

      <Header />

      <ViewSection>
        <h2>Conversational Design</h2>

        <Avatar avatar="avatar1" />

        <TextSegment>
          Wir konzipieren Benutzererlebnisse und helfen ihnen dabei, die richtige
          Botschaft an ihre Kunden zu senden.
        </TextSegment>

        <h2>Sprachplattformen</h2>

        <Avatar avatar="device1" size={240} />
        <VendorLogos size={40} />

        <TextSegment>
          Sie profitieren von unseren umfangreichen Kenntnissen der
          Entwicklungsplattformen (SDK) für Alexa-Skills, Google Actions und
          Messenger-API.
        </TextSegment>
      </ViewSection>

      <ViewSection>
        <h2>Service-Integration</h2>

        <Avatar avatar="integration" />

        <TextSegment>
          Kundenkonten, Warenkörbe, Zahlungsvorgänge, Bestellhistorie ‒ jegliche
          Art von Daten können wir miteinander verbinden.
        </TextSegment>

        <h2>Künstliche Intelligenz</h2>

        <Avatar avatar="ai" size={120} />

        <TextSegment>
          Mit Hilfe Künstlicher Intelligenz (KI) und Verarbeitung Natürlicher Sprache
          (NLP) gelingt es, die Beziehung zu ihren Kunden zu automatisieren.
        </TextSegment>
      </ViewSection>

      <ViewSection drop>
        <h2>Ihre Vorteile</h2>

        <TextSegment>
          Ihre Sachbearbeiter werden entlastet und können sich auf wirklich
          wertschöpfende Tätigkeiten konzentrieren.
        </TextSegment>

        <ImageGroup count={2} size={120}>
          <Avatar avatar="avatar2" size={120} />
          <Avatar avatar="avatar4" size={120} />
          <Avatar avatar="avatar3" size={120} />
        </ImageGroup>

        <Benefits>
          <BenefitItem icon="✈️">
            mehr Nutzer-Engagement durch zusätzliche Interaktionsmöglichkeit
          </BenefitItem>
          <BenefitItem icon="❤️">
            höhere Kundenbindung und Kundenzufriedenheit
          </BenefitItem>
          <BenefitItem icon="🌟">
            effizientere Prozesse
          </BenefitItem>
        </Benefits>

        <CallToAction light>Erfahren Sie mehr</CallToAction>
      </ViewSection>

      <ViewSection>
        <h2>Wählen Sie ein Buchungspaket</h2>

        <h3>Amazon Alexa oder Google Home</h3>

        <ul className="packages">
          <li>Anmelden und Zertifizieren Skill / Action</li>
          <li>Erstellung Interaktionskonzept</li>
          <li>Entwicklung Sprachinhalte (Dialog-Design)</li>
          <li>Branding</li>
        </ul>

        <CallToAction>Jetzt buchen</CallToAction>

        <h3>Facebook Messenger oder eigene Chat-Plattform</h3>

        <ul className="packages">
          <li>Erstellung Interaktionskonzept</li>
          <li>Entwicklung Sprachinhalte (Dialog-Design)</li>
          <li>Branding</li>
          <li>Webentwicklung</li>
        </ul>

        <CallToAction>Jetzt buchen</CallToAction>

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

        <CallToAction>Jetzt buchen</CallToAction>

        <h3>Integration für Handel und Kundendienst</h3>

        <ul className="packages">
          <li>
            <b><i>Alles aus “Dabeisein ist Alles” und “Context is God”</i></b>
          </li>
          <li>Warenkorb</li>
          <li>Checkout/Payment-Prozess</li>
          <li>Waren- und Kundendaten (WaWi & CRM)</li>
        </ul>

        <CallToAction>Jetzt buchen</CallToAction>
      </ViewSection>

      <ViewSection id="go">
        <h2>
          <span role="img" aria-label="Ausdruck von Überraschung">😲</span>
          Upps… wir sind noch nicht soweit!
        </h2>

        <p>
          Geben Sie ihre Emailadresse ein und wir melden uns bei Ihnen,
          sobald wir ihnen den vollen Service garantieren können.
        </p>

        <p>
          <input type="email" placeholder="Bitte geben Sie ihre Email-Adresse ein" />
          <button>Senden</button>
        </p>
      </ViewSection>

    </Container>
  );
}
