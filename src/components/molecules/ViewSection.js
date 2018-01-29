import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "themes";

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 .4em;

  ${props => props.color && `
    background-color: ${theme.colors[props.color]};
    color: white;
  `}

  ${props => props.panorama && `
    justify-content: flex-start;
    align-items: center;
    min-height: 80vh;
    background-image: url("static/panorama.svg");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    color: white;
  `}

  ${props => props.cutaway && `
    background-image: url("static/section-cutaway.svg");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
  `}

  ${props => props.drop && `
    background-image: url("static/section-cutaway.svg");
    background-repeat: no-repeat;
    background-position: center -6em;
    background-size: contain;
  `}
`;

export default function ViewSection({ children, ...props }) {
  return (
    <Section {...props}>{children}</Section>
  );
}

ViewSection.propTypes = {
  children: PropTypes.node
};

ViewSection.defaultProps = {
  children: undefined
};
