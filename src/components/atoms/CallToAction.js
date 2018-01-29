import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "themes";

const Button = styled.a`
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
  display: inline-block;
  margin: 1.5em 1em;
  min-width: 8em;
  padding: .4em .8em 0.3em;
  text-decoration: none;
  transition: .4s;

  ${(props) => {
    if (props.light) {
      return `
        background-color: ${theme.colors.cyan};
        color: ${theme.colors.darkblue};

        &:hover {
          background-color: ${theme.colors.darkblue};
          color: white;
        }
      `;
    }
    return `
      background-color: ${theme.colors.darkblue};
      color: ${theme.colors.cyan};

      &:hover {
        background-color: ${theme.colors.cyan};
        color: ${theme.colors.darkblue};
      }
    `;
  }}
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
