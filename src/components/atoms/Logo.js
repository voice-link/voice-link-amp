import React from "react";
import styled from "styled-components";
import { Amp } from 'react-amphtml';

const ImgLogo = styled(Amp.Img)`
  margin: 1em;
`;

function LogoBlue() {
  return (
    <ImgLogo
      src="static/logo-blue.svg"
      alt="Voice.link logo"
      height="480"
      width="387"
      layout="fixed"
    />
  );
}

export default function Logo() {
  return <LogoBlue />;
}
