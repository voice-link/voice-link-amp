import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  height: 3rem;
  color: ${props => props.theme.colors.white};
  align-self: flex-start;
`;

export default function Logo() {
  return (
    <LogoWrapper>Voice.link</LogoWrapper>
  );
}