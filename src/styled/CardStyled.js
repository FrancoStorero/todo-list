import styled from "styled-components";

export const CardStyled = styled.div`
  border-top: 4px solid ${props => props.randomColor};
  width: 20%;
  height: 40%;
  margin: 0.5rem;
  word-wrap: break-word;
  word-break: break-all;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.6);
`;

