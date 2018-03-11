import React from "react";
import PropTypes from "prop-types";
import { Amp } from "react-amphtml";

import ImageGroup from "./ImageGroup";

export default function VendorLogos({ size, light }) {
  const variant = light ? "-white" : "";

  return (
    <ImageGroup size={size} count={3}>
      <Amp.Img
        src={`static/alexa${variant}.svg`}
        alt="Amazon Alexa"
        height={size}
        width={size}
        layout="fixed"
      />
      <Amp.Img
        src={`static/google${variant}.svg`}
        alt="Google Home"
        height={size}
        width={size}
        layout="fixed"
      />
      <Amp.Img
        src={`static/messenger${variant}.svg`}
        alt="Messenger Platform"
        height={size}
        width={size}
        layout="fixed"
      />
    </ImageGroup>
  );
}

VendorLogos.propTypes = {
  size: PropTypes.number,
  light: PropTypes.bool
};

VendorLogos.defaultProps = {
  size: 64,
  light: false
};
