import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  height: 3rem;
  color: ${props => props.theme.colors.white};
  align-self: flex-start;
  flex: 1;
`;

export default function Logo() {
  return <LogoWrapper>Voice.link</LogoWrapper>;
}
