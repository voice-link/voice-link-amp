import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;

  ul.packages {
    li {
      border-bottom: 1px solid #ccc;
      list-style: none;
      margin-left: 1.6em;
      position: relative;
      padding-left: 0.4em;
      padding-top: 0.4em;
      padding-bottom: 0.4em;

      &:before {
        content: "👍";
        position: absolute;
        left: -1.4em;
      }
    }
  }
`;
