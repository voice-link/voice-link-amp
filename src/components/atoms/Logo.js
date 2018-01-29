import React from "react";
import styled from "styled-components";
import { Amp } from 'react-amphtml';

const ImgLogo = styled(Amp.Img)`
  margin: 1em;
`;

function LogoWhite() {
  return (
    <ImgLogo
      src="static/logo-white.svg"
      alt="Voice.link logo"
      height="240"
      width="240"
      layout="fixed"
    />
  );
}

function LogoColoured() {
  return (
    <ImgLogo
      src="static/logo-coloured.svg"
      alt="Voice.link logo"
      height="275"
      width="250"
      layout="fixed"
    />
  );
}

export default function Logo({ coloured }) {
  if (coloured) {
    return <LogoColoured />;
  }
  return <LogoWhite />;
}
