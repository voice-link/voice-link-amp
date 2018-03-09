import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "themes/colors";

const ColorTile = styled.div`
  width: 8em;
  height: 8em;
  background-color: ${props => colors[props.color]}
`;

const ColorFrame = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 1em;
  padding: .4em;
  border: 1px solid #ccc;

  &:hover {
    background-color: whitesmoke;
  }
`;

const ColorTitle = styled.div`
  text-align: center;
  color: hsla(0, 0%, 50%, 1);
  margin: .4em 0 0;
`;

function ColorCard({ name, value }) {
  return (
    <ColorFrame>
      <ColorTile color={name} />
      <ColorTitle>
        {name}<br />
        <small><i>{value}</i></small>
      </ColorTitle>
    </ColorFrame>
  );
}

ColorCard.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
};

ColorCard.defaultProps = {
  name: undefined,
  value: undefined
};

const ColorCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Colors({ colors }) {
  return (
    <ColorCardGroup>
      {
        Object.keys(colors).map(name =>
          <ColorCard name={name} value={colors[name]} key={name} />)
      }
    </ColorCardGroup>
  );
}

Colors.propTypes = {
  colors: PropTypes.object
};

Colors.defaultProps = {
  colors: {}
};
