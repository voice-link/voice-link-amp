import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

const LogoWrapper = styled.div`
  height: 3rem;
  color: ${props => props.theme.colors.white};
  align-self: flex-start;
  flex: 1;

  a {
    color: inherit;
    text-decoration: none;
  }

  ${props =>
    props.dark &&
    `
    color: ${props.theme.colors.almostblack};
  `};
`;

function Logo({ href, ...props }) {
  return (
    <LogoWrapper {...props}>
      {href ? (
        <Link href={href}>
          <a>Voice.link</a>
        </Link>
      ) : (
        "Voice.link"
      )}
    </LogoWrapper>
  );
}

Logo.propTypes = {
  href: PropTypes.string
};

Logo.defaultProps = {
  href: undefined
};

export default Logo;
