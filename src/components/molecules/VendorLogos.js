import React from "react";
import PropTypes from "prop-types";
import { Amp } from "react-amphtml";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

export default function VendorLogos({ size, light }) {
  const variant = light ? "-white" : "";

  return (
    <Grid>
      <Row>
        <Col smOffset={3} sm={2}>
          <Amp.Img
            src={`static/alexa${variant}.svg`}
            alt="Amazon Alexa"
            height={size}
            width={size}
            layout="fixed"
          />
        </Col>
        <Col sm={2}>
          <Amp.Img
            src={`static/google${variant}.svg`}
            alt="Google Home"
            height={size}
            width={size}
            layout="fixed"
          />
        </Col>
        <Col sm={2}>
          <Amp.Img
            src={`static/messenger${variant}.svg`}
            alt="Messenger Platform"
            height={size}
            width={size}
            layout="fixed"
          />
        </Col>
      </Row>
    </Grid>
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
