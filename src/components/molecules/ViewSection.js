import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../themes";

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
    props["header-small"] &&
    `
    min-height: auto;
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

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}

  ${props =>
    props.imprint &&
    `
    text-align: left;
    font-size: 1rem;
    text-align: center;

    ol {
      list-style: none;
      counter-reset: section;
      text-align: left;

      h3 {
        counter-increment: section;
        counter-reset: subsection;
        padding-left: ${props.theme.layout.orderedList.headline.padding};
        position: relative;
        font-size: ${props.theme.layout.orderedList.headline.fontSize};

        &:before {
          content: counter(section) ".";
          position: absolute;
          left: 0;
        }
      }

      > li {
        margin: 1em 0;
        position: relative;
        padding-left: ${props.theme.layout.orderedList.padding};

        &:before {
          counter-increment: subsection;
          content: counter(section) "." counter(subsection) ".";
          position: absolute;
          left: 0;
        }
      }

      ul li {
        margin: 1em 0;
      }
    }
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
