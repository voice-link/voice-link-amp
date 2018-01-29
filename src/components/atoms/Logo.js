import React from "react";
import styled from "styled-components";
import { Amp } from 'react-amphtml';

const LogoWrapper = styled.div`
  width: 60%;
  max-width: 12em;
  min-width: 6em;
`;

function LogoBlue() {
  return (
    <LogoWrapper>
      <Amp.Img
        src="static/logo-blue.svg"
        alt="Voice.link logo"
        height="387"
        width="480"
        layout="responsive"
      />
    </LogoWrapper>
  );
}

export default function Logo() {
  return <LogoBlue />;
}
