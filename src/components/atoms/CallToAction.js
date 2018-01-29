import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.a`
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
  display: inline-block;
  min-width: 8em;
  padding: .4em .8em 0.3em;
  text-decoration: none;
  text-align: center;
  transition: .4s;

  ${props => `
    background-color: ${props.theme.colors.lightblue};
    color: ${props.theme.colors.white};

    &:hover {
      background-color: ${props.theme.colors.darkblue};
    }
  `}
`;

export default function CallToAction({ children, ...props }) {
  return (
    <Button {...props} href="#go">{children}</Button>
  );
}

CallToAction.propTypes = {
  children: PropTypes.node
};

CallToAction.defaultProps = {
  children: undefined
};
