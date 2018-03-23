import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PackageHeader from "../atoms/PackageHeader";
import PackageContent from "../atoms/PackageContent";

const StyledPackage = styled("div")`
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 1rem 0;
  box-sizing: border-box;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      position: relative;
      padding-left: 0.4em;
      padding-top: 0.4em;
      padding-bottom: 0.4em;
    }
  }
`;

function Package({ children, ...props }) {
  return (
    <StyledPackage>
      <PackageHeader {...props} />
      <PackageContent>{children}</PackageContent>
    </StyledPackage>
  );
}

Package.propTypes = {
  children: PropTypes.node
};

Package.defaultProps = {
  children: undefined
};

export default Package;
