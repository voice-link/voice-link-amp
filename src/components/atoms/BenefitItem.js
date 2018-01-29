import PropTypes from "prop-types";
import styled from "styled-components";

const BenefitItem = styled.li`
  display: flex;
  flex: 1;
  list-style: none;
  padding-left: 1.8em;
  position: relative;
  margin-right: 1.8em;

  &:before {
    content: "${props => props.icon}";
    position: absolute;
    left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

BenefitItem.propTypes = {
  icon: PropTypes.string
};

BenefitItem.defaultProps = {
  icon: "❤️"
};

export default BenefitItem;
