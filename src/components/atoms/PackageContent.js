import styled from "styled-components";

export default styled("div")`
  border: 1px solid ${({ theme }) => theme.colors.almostblack};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 8px 8px;
  padding: 0.4em;
  font-size: 0.8em;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
