import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-flow: row;
  ${({ count, size }) => `
    width: calc((${count} * ${size}px) + (${count - 1} * 2em));
  `}
  justify-content: space-evenly;
  margin: 1em;
`;
