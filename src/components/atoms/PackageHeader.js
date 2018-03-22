import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PackageTitle = styled("div")`
  font-size: 1.4em;
`;

const PackageHeadline = styled("div")``;

function PackageHeader({ title, headline, className }) {
  return (
    <div className={className}>
      <PackageTitle>{title}</PackageTitle>
      <PackageHeadline>{headline}</PackageHeadline>
    </div>
  );
}

PackageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default styled(PackageHeader)`
  text-align: center;
  padding: 0.4em;
  border-radius: 8px 8px 0 0;
  background-color: ${({ theme }) => theme.colors.almostblack};
  color: ${({ theme }) => theme.colors.white};
`;
