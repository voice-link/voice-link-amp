/* eslint react/no-danger: off */
import React from "react";
import { Amp } from "react-amphtml";

const account = process.env.GA_PROPERTY_ID;

export default function Analytics() {
  const data = {
    vars: {
      account
    },
    triggers: {
      trackPageview: {
        on: "visible",
        request: "pageview"
      }
    }
  };
  return (
    <Amp.Analytics type="googleanalytics">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Amp.Analytics>
  );
}
