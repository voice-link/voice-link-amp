import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FontList = styled.ul``;

const FontListItem = styled.li`
    list-style: none;
    margin: 1rem 0;

    ${props => `
        font-family: ${props.font["font-family"]};
        font-weight: ${props.font["font-weight"]};
        font-size: ${props.font["font-size"]};
      `}
  `;

const Subtext = styled.div`
  font-family: Arial;
  font-weight: 100;
  font-size: 9pt;
  line-height: 1;
`;

export default function Fonts({ fonts }) {
  return (
    <FontList>
      {
        Object.keys(fonts).map(fontName => (
          <FontListItem fontName={fontName} font={fonts[fontName]}>
            {fontName[0].toUpperCase()}{fontName.substr(1)}<br />
            <Subtext>
              {fonts[fontName]["font-family"]} {fonts[fontName]["font-weight"]}, {fonts[fontName]["font-size"]}
            </Subtext>
          </FontListItem>
        ))
      }
    </FontList>
  );
}

Fonts.propTypes = {
  fonts: PropTypes.array
};

Fonts.defaultProps = {
  fonts: []
};
