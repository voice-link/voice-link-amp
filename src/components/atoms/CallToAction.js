import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.a`
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
  display: inline-block;
  font-weight: 700;
  min-width: 8em;
  padding: 0.3em 1em;
  text-decoration: none;
  text-align: center;
  transition: .4s;

  ${props => `
    background-color: ${props.theme.colors.accent};
    color: ${props.theme.colors.white};

    &:hover {
      box-shadow: 0 0px 12px 4px ${props.theme.colors.accentDarkTransparent};
    }
  `}

  ${props =>
    props.dark &&
    `
    &:hover {
      box-shadow: 0 0px 12px 4px ${props.theme.colors.accentLightTransparent};
    }
  `}

  ${props =>
    props.large &&
    `
    margin: 1em;
    font-size: 1.4em;
  `}

  ${props =>
    props.wide &&
    `
    margin: 1em;
  `}

  ${props =>
    props.hanging &&
    `
    position: absolute;
    top: 1em;
    right: 1em;
    font-size: .8em;
  `}
`;

export default function CallToAction({ children, href = "#start", ...props }) {
  return (
    <Button {...props} href={href}>
      {children}
    </Button>
  );
}

CallToAction.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

CallToAction.defaultProps = {
  children: undefined,
  href: undefined
};
