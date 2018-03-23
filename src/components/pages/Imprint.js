import React from "react";
import Head from "next/head";
import { withTheme } from "styled-components";

import { Caption, Logo, SectionHeadline } from "../atoms";
import { ViewSection } from "../molecules";
import Container from "../Container";

function Imprint() {
  return (
    <Container>
      <Head>
        <title>Voice.link | Imprint</title>
      </Head>

      <ViewSection header-small>
        <Logo dark href="/index" />
      </ViewSection>

      <ViewSection id="top" imprint>
        <SectionHeadline>Impressum</SectionHeadline>

        <p>
          Voice.link Speech Interaction Design<br />
          Jakob Hohlfeld<br />
          Schillerstraße 40<br />
          38440 Wolfsburg
        </p>
        <p>
          Telefon: +49 (0) 5361 834 91 28<br />
          Email: <a href="mailto:hello@voice.link">hello@voice.link</a>
        </p>

        <Caption>Datenschutzerklärung</Caption>

        <p>Verantwortlicher:</p>
        <p>
          Jakob Hohlfeld<br />
          Schillerstraße 40<br />
          38440 Wolfsburg
        </p>
        <p>Stand: 23.03.2018</p>

        <ol>
          <h3>
            Grundsätzliche Angaben zur Datenverarbeitung und Rechtsgrundlagen
          </h3>
          <li>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
            Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres
            Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen
            und Inhalte (nachfolgend gemeinsam bezeichnet als „Onlineangebot“
            oder „Website“) auf. Die Datenschutzerklärung gilt unabhängig von
            den verwendeten Domains, Systemen, Plattformen und Geräten (z.B.
            Desktop oder Mobile) auf denen das Onlineangebot ausgeführt wird.
          </li>
          <li>
            Die verwendeten Begrifflichkeiten, wie z.B. „personenbezogene Daten“
            oder deren „Verarbeitung“ verweisen wir auf die Definitionen im Art.
            4 der Datenschutzgrundverordnung (DSGVO).
          </li>
          <li>
            Zu den im Rahmen dieses Onlineangebotes verarbeiteten
            personenbezogenen Daten der Nutzer gehören Bestandsdaten (z.B.,
            Namen und Email-Adressen von Kunden), Vertragsdaten (in Anspruch
            genommene Leistungen, Namen von Sachbearbeitern,
            Zahlungsinformationen), Nutzungsdaten (z.B., die besuchten Webseiten
            unseres Onlineangebotes, Interesse an unseren Produkten) und
            Inhaltsdaten (z.B., Eingaben im Kontaktformular).
          </li>
          <li>
            Der Begriff „Nutzer“ umfasst alle Kategorien von der
            Datenverarbeitung betroffener Personen. Zu ihnen gehören unsere
            Geschäftspartner, Kunden, Interessenten und sonstige Besucher
            unseres Onlineangebotes. Die verwendeten Begrifflichkeiten, wie z.B.
            „Nutzer“ sind geschlechtsneutral zu verstehen.
          </li>
          <li>
            Wir verarbeiten personenbezogene Daten der Nutzer nur unter
            Einhaltung der einschlägigen Datenschutzbestimmungen. Das bedeutet,
            die Daten der Nutzer werden nur bei Vorliegen einer gesetzlichen
            Erlaubnis verarbeitet. D.h., insbesondere wenn die Datenverarbeitung
            zur Erbringung unserer vertraglichen Leistungen (z.B. Bearbeitung
            von Aufträgen) sowie Online-Services erforderlich, bzw. gesetzlich
            vorgeschrieben ist, eine Einwilligung der Nutzer vorliegt, als auch
            aufgrund unserer berechtigten Interessen (d.h. Interesse an der
            Analyse, Optimierung und wirtschaftlichem Betrieb und Sicherheit
            unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO,
            insbesondere bei der Reichweitenmessung, Erstellung von Profilen zu
            Werbe- und Marketingzwecken sowie Erhebung von Zugriffsdaten und
            Einsatz der Dienste von Drittanbietern.
          </li>
          <li>
            Wir weisen darauf hin, dass die Rechtsgrundlage der Einwilligungen
            Art. 6 Abs. 1 lit. a. und Art. 7 DSGVO, die Rechtsgrundlage für die
            Verarbeitung zur Erfüllung unserer Leistungen und Durchführung
            vertraglicher Maßnahmen Art. 6 Abs. 1 lit. b. DSGVO, die
            Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer
            rechtlichen Verpflichtungen Art. 6 Abs. 1 lit. c. DSGVO, und die
            Rechtsgrundlage für die Verarbeitung zur Wahrung unserer
            berechtigten Interessen Art. 6 Abs. 1 lit. f. DSGVO ist.
          </li>

          <h3>Sicherheitsmaßnahmen</h3>

          <li>
            Wir treffen organisatorische, vertragliche und technische
            Sicherheitsmaßnahmen entsprechend dem Stand der Technik, um
            sicherzustellen, dass die Vorschriften der Datenschutzgesetze
            eingehalten werden und um damit die durch uns verarbeiteten Daten
            gegen zufällige oder vorsätzliche Manipulationen, Verlust,
            Zerstörung oder gegen den Zugriff unberechtigter Personen zu
            schützen.
          </li>
          <li>
            Zu den Sicherheitsmaßnahmen gehört insbesondere die verschlüsselte
            Übertragung von Daten zwischen Ihrem Browser und unserem Server.
          </li>

          <h3>Weitergabe von Daten an Dritte und Drittanbieter</h3>

          <li>
            Eine Weitergabe von Daten an Dritte erfolgt nur im Rahmen der
            gesetzlichen Vorgaben. Wir geben die Daten der Nutzer an Dritte nur
            dann weiter, wenn dies z.B. auf Grundlage des Art. 6 Abs. 1 lit. b)
            DSGVO für Vertragszwecke erforderlich ist oder auf Grundlage
            berechtigter Interessen gem. Art. 6 Abs. 1 lit. f. DSGVO an
            wirtschaftlichem und effektivem Betrieb unseres Geschäftsbetriebes.
          </li>
          <li>
            Sofern wir Subunternehmer einsetzen, um unsere Leistungen
            bereitzustellen, ergreifen wir geeignete rechtliche Vorkehrungen
            sowie entsprechende technische und organisatorische Maßnahmen, um
            für den Schutz der personenbezogenen Daten gemäß den einschlägigen
            gesetzlichen Vorschriften zu sorgen.
          </li>
          <li>
            Sofern im Rahmen dieser Datenschutzerklärung Inhalte, Werkzeuge oder
            sonstige Mittel von anderen Anbietern (nachfolgend gemeinsam
            bezeichnet als „Drittanbieter“) eingesetzt werden und deren
            genannter Sitz sich in einem Drittland befindet, ist davon
            auszugehen, dass ein Datentransfer in die Sitzstaaten der
            Drittanbieter stattfindet. Als Drittstaaten sind Länder zu
            verstehen, in denen die DSGVO kein unmittelbar geltendes Recht ist,
            d.h. grundsätzlich Länder außerhalb der EU, bzw. des Europäischen
            Wirtschaftsraums. Die Übermittlung von Daten in Drittstaaten erfolgt
            entweder, wenn ein angemessenes Datenschutzniveau, eine Einwilligung
            der Nutzer oder sonst eine gesetzliche Erlaubnis vorliegt.
          </li>

          <h3>Kundenregistrierung</h3>
          <li>
            Wir verarbeiten Bestandsdaten (z.B., Namen und Adressen sowie
            Kontaktdaten von Nutzern), Vertragsdaten (z.B., in Anspruch
            genommene Leistungen, Namen von Kontaktpersonen,
            Zahlungsinformationen) zwecks Erfüllung unserer vertraglichen
            Verpflichtungen und Serviceleistungen gem. Art. 6 Abs. 1 lit b.
            DSGVO.
          </li>
          <li>
            Wir verarbeiten Nutzungsdaten (z.B., die besuchten Webseiten unseres
            Onlineangebotes, Interesse an unseren Produkten) und Inhaltsdaten
            (z.B., Eingaben im Kontaktformular oder Nutzerprofil) für
            Werbezwecke in einem Nutzerprofil, um den Nutzer z.B.
            Produkthinweise ausgehend von ihren bisher in Anspruch genommenen
            Leistungen einzublenden.
          </li>

          <h3>Kontaktaufnahme</h3>

          <li>
            Bei der Kontaktaufnahme mit uns (per Kontaktformular oder E-Mail)
            werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage
            und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet.
          </li>
          <li>
            Die Angaben der Nutzer können in unserem
            Customer-Relationship-Management System (CRM System) oder
            vergleichbarer Anfragenorganisation gespeichert werden.
          </li>
          <li>
            Wir setzen als CRM-System „Google Sheets“ des Anbieters Google LLC,
            Google Ireland Limited, Google Commerce Limited, Google Asia Pacific
            Pte. Ltd or Google Australia Pty Ltd - “Google”) auf Grundlage
            unserer berechtigten Interessen (effiziente und schnelle Bearbeitung
            der Nutzeranfragen) ein. Hierzu haben wir mit Google einen Vertrag
            mit sog. Standardvertragsklauseln abgeschlossen, in denen sich
            Google zur Verarbeitung der Nutzerdaten nur entsprechend unseren
            Weisungen und zur Einhaltung des EU-Datenschutzniveaus verpflichtet.
            Google ist ferner unter dem Privacy-Shield-Abkommen zertifiziert und
            bietet hierdurch eine zusätzliche Garantie, das europäische
            Datenschutzrecht einzuhalten
            (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).
          </li>

          <h3>Bereitstellung der Inhalte (Hosting)</h3>
          <li>
            Wir setzen als Hosting-System „Firebase“ des Anbieters Google LLC,
            Google Ireland Limited, Google Commerce Limited, Google Asia Pacific
            Pte. Ltd or Google Australia Pty Ltd - “Google”) auf Grundlage
            unserer berechtigten Interessen (effiziente und schnelle Bearbeitung
            der Nutzeranfragen) ein. Hierzu haben wir mit Google einen Vertrag
            mit sog. Standardvertragsklauseln abgeschlossen, in denen sich
            Google zur Verarbeitung der Nutzerdaten nur entsprechend unseren
            Weisungen und zur Einhaltung des EU-Datenschutzniveaus verpflichtet.
            Google ist ferner unter dem Privacy-Shield-Abkommen zertifiziert und
            bietet hierdurch eine zusätzliche Garantie, das europäische
            Datenschutzrecht einzuhalten
            (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).
          </li>

          <h3>Google Analytics</h3>

          <li>
            Wir setzen auf Grundlage unserer berechtigten Interessen (d.h.
            Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb
            unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO)
            Google Analytics, einen Webanalysedienst der Google Inc. („Google“)
            ein. Google verwendet Cookies. Die durch das Cookie erzeugten
            Informationen über Benutzung des Onlineangebotes durch die Nutzer
            werden in der Regel an einen Server von Google in den USA übertragen
            und dort gespeichert.
          </li>
          <li>
            Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet
            hierdurch eine Garantie, das europäische Datenschutzrecht
            einzuhalten
            (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).
          </li>
          <li>
            Google wird diese Informationen in unserem Auftrag benutzen, um die
            Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten, um
            Reports über die Aktivitäten innerhalb dieses Onlineangebotes
            zusammenzustellen und um weitere, mit der Nutzung dieses
            Onlineangebotes und der Internetnutzung verbundene Dienstleistungen,
            uns gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten
            pseudonyme Nutzungsprofile der Nutzer erstellt werden.
          </li>
          <li>
            Wir setzen Google Analytics ein, um die durch innerhalb von
            Werbediensten Googles und seiner Partner geschalteten Anzeigen, nur
            solchen Nutzern anzuzeigen, die auch ein Interesse an unserem
            Onlineangebot gezeigt haben oder die bestimmte Merkmale (z.B.
            Interessen an bestimmten Themen oder Produkten, die anhand der
            besuchten Webseiten bestimmt werden) aufweisen, die wir an Google
            übermitteln (sog. „Remarketing-“, bzw.
            „Google-Analytics-Audiences“). Mit Hilfe der Remarketing Audiences
            möchten wir auch sicherstellen, dass unsere Anzeigen dem
            potentiellen Interesse der Nutzer entsprechen und nicht belästigend
            wirken.
          </li>
          <li>
            Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung
            ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google
            innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
            gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen
            Server von Google in den USA übertragen und dort gekürzt.
          </li>
          <li>
            Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht
            mit anderen Daten von Google zusammengeführt. Die Nutzer können die
            Speicherung der Cookies durch eine entsprechende Einstellung ihrer
            Browser-Software verhindern; die Nutzer können darüber hinaus die
            Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des
            Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung
            dieser Daten durch Google verhindern, indem sie das unter folgendem
            Link verfügbare Browser-Plugin herunterladen und installieren:
            http://tools.google.com/dlpage/gaoptout?hl=de.
          </li>
          <li>
            Weitere Informationen zur Datennutzung durch Google, Einstellungs-
            und Widerspruchsmöglichkeiten erfahren Sie auf den Webseiten von
            Google: https://www.google.com/intl/de/policies/privacy/partners
            („Datennutzung durch Google bei Ihrer Nutzung von Websites oder Apps
            unserer Partner“), http://www.google.com/policies/technologies/ads
            („Datennutzung zu Werbezwecken“), http://www.google.de/settings/ads
            („Informationen verwalten, die Google verwendet, um Ihnen Werbung
            einzublenden“).
          </li>

          <h3>Einbindung von Diensten und Inhalten Dritter</h3>

          <li>
            Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer
            berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung
            und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des
            Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder Serviceangebote von
            Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos
            oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet
            als “Inhalte”). Dies setzt immer voraus, dass die Drittanbieter
            dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne
            die IP-Adresse die Inhalte nicht an deren Browser senden könnten.
            Die IP-Adresse ist damit für die Darstellung dieser Inhalte
            erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren
            jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der
            Inhalte verwenden. Drittanbieter können ferner so genannte
            Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons“ bezeichnet)
            für statistische oder Marketingzwecke verwenden. Durch die
            „Pixel-Tags“ können Informationen, wie der Besucherverkehr auf den
            Seiten dieser Website ausgewertet werden. Die pseudonymen
            Informationen können ferner in Cookies auf dem Gerät der Nutzer
            gespeichert werden und unter anderem technische Informationen zum
            Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie
            weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als
            auch mit solchen Informationen aus anderen Quellen verbunden werden
            können.
          </li>
          <li>
            Die nachfolgende Darstellung bietet eine Übersicht von
            Drittanbietern sowie ihrer Inhalte, nebst Links zu deren
            Datenschutzerklärungen, welche weitere Hinweise zur Verarbeitung von
            Daten und, z.T. bereits hier genannt, Widerspruchsmöglichkeiten
            (sog. Opt-Out) enthalten:
            <ul>
              <li>
                Externe Schriftarten von Google, Inc.,
                https://www.google.com/fonts („Google Fonts“). Die Einbindung
                der Google Fonts erfolgt durch einen Serveraufruf bei Google (in
                der Regel in den USA). Datenschutzerklärung:
                https://www.google.com/policies/privacy/, Opt-Out:
                https://www.google.com/settings/ads/.
              </li>
              <li>
                Webanalyse und Optimierung mit Hilfe des Dienstes Hotjar, des
                Drittanbieters Hotjar Ltd., Level 2, St Julians Business Centre,
                3, Elia Zammit Street, St Julians STJ 1000, Malta, Europe. Mit
                Hotjar lassen sich Bewegungen auf den Webseiten, auf denen
                Hotjar eingesetzt wird, nachvollziehen (sog. Heatmaps). So ist
                beispielsweise erkennbar, wie weit Nutzer scrollen und welche
                Schaltflächen die Nutzer wie oft anklicken. Ferner werden
                technische Daten wie gewählte Sprache, System,
                Bildschirmauflösung und Browserart erfasst. Hierbei können,
                zumindest vorübergehend während des Besuchs auf unserer Webseite
                Profile der Nutzer erstellt werden. Weiterhin ist es mithilfe
                von Hotjar auch möglich, Feedback direkt von den Nutzern der
                Website einzuholen. Auf diese Weise erlangen wir wertvolle
                Informationen, um unsere Websites noch schneller und
                kundenfreundlicher zu gestalten. Datenschutzerklärung:
                https://www.hotjar.com/privacy. Opt-Out:
                https://www.hotjar.com/opt-out.
              </li>
            </ul>
          </li>

          <h3>Rechte der Nutzer</h3>

          <li>
            Nutzer haben das Recht, auf Antrag unentgeltlich Auskunft zu
            erhalten über die personenbezogenen Daten, die von uns über sie
            gespeichert wurden.
          </li>
          <li>
            Zusätzlich haben die Nutzer das Recht auf Berichtigung unrichtiger
            Daten, Einschränkung der Verarbeitung und Löschung ihrer
            personenbezogenen Daten, sofern zutreffend, Ihre Rechte auf
            Datenportabilität geltend zu machen und im Fall der Annahme einer
            unrechtmäßigen Datenverarbeitung, eine Beschwerde bei der
            zuständigen Aufsichtsbehörde einzureichen.
          </li>
          <li>
            Ebenso können Nutzer Einwilligungen, grundsätzlich mit Auswirkung
            für die Zukunft, widerrufen.
          </li>

          <h3>Löschung von Daten</h3>

          <li>
            Die bei uns gespeicherten Daten werden gelöscht, sobald sie für ihre
            Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten
            der Nutzer nicht gelöscht werden, weil sie für andere und gesetzlich
            zulässige Zwecke erforderlich sind, wird deren Verarbeitung
            eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere
            Zwecke verarbeitet. Das gilt z.B. für Daten der Nutzer, die aus
            handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.
          </li>
          <li>
            Nach gesetzlichen Vorgaben erfolgt die Aufbewahrung für 6 Jahre
            gemäß § 257 Abs. 1 HGB (Handelsbücher, Inventare,
            Eröffnungsbilanzen, Jahresabschlüsse, Handelsbriefe, Buchungsbelege,
            etc.) sowie für 10 Jahre gemäß § 147 Abs. 1 AO (Bücher,
            Aufzeichnungen, Lageberichte, Buchungsbelege, Handels- und
            Geschäftsbriefe, Für Besteuerung relevante Unterlagen, etc.).
          </li>

          <h3>Widerspruchsrecht</h3>

          <li>
            Nutzer können der künftigen Verarbeitung ihrer personenbezogenen
            Daten entsprechend den gesetzlichen Vorgaben jederzeit
            widersprechen. Der Widerspruch kann insbesondere gegen die
            Verarbeitung für Zwecke der Direktwerbung erfolgen.
          </li>

          <h3>Änderungen der Datenschutzerklärung</h3>

          <li>
            Wir behalten uns vor, die Datenschutzerklärung zu ändern, um sie an
            geänderte Rechtslagen, oder bei Änderungen des Dienstes sowie der
            Datenverarbeitung anzupassen. Dies gilt jedoch nur im Hinblick auf
            Erklärungen zur Datenverarbeitung. Sofern Einwilligungen der Nutzer
            erforderlich sind oder Bestandteile der Datenschutzerklärung
            Regelungen des Vertragsverhältnisses mit den Nutzern enthalten,
            erfolgen die Änderungen nur mit Zustimmung der Nutzer.
          </li>
          <li>
            Die Nutzer werden gebeten sich regelmäßig über den Inhalt der
            Datenschutzerklärung zu informieren.
          </li>
        </ol>
      </ViewSection>
    </Container>
  );
}

export default withTheme(Imprint);
