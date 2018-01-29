import React from "react";
import PropTypes from "prop-types";
import { Amp } from 'react-amphtml';

export default function Avatar({ avatar, size }) {
  return (
    <Amp.Img
      src={`static/${avatar}.svg`}
      alt="Avatar"
      height={size}
      width={size}
      layout="fixed"
    />
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string,
  size: PropTypes.number
};

Avatar.defaultProps = {
  avatar: "avatar1",
  size: 240
};
