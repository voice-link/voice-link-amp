import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "themes";

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  min-height: 90vh;
  padding: 1em;

  ${props =>
    props.color &&
    `
    background-color: ${theme.colors[props.color]};
  `}

  ${props =>
    props.header &&
    `
    background-color: ${props.theme.colors.almostblack};
    background-image: url(static/doodle_background.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${props.theme.colors.white};
    justify-content: space-between;
  `}

  ${props =>
    props.footer &&
    `
    background-color: ${props.theme.colors.almostblack};
    background-image: url(static/doodle_background_footer.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    color: ${props.theme.colors.white};
    text-align: center;
    margin-top: 6rem;
    padding-top: 5rem;
    min-height: auto;
  `}
`;

export default function ViewSection({ children, ...props }) {
  return <Section {...props}>{children}</Section>;
}

ViewSection.propTypes = {
  children: PropTypes.node
};

ViewSection.defaultProps = {
  children: undefined
};
