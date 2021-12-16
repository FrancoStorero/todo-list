import styled from "styled-components";

export const PStyled = styled.p`
  border-top: 1px solid rgba(128, 128, 128, 0.24);
  word-break: break-word;
  padding: 7px;
  overflow: auto;
  height: 80%;
  font-size: 0.7rem;
  font-family: monospace;
  background-color: #ffffff90;
  display: flex;
  flex-direction: column;  
  justify-content: space-between;


  & .miDiv {    
    flex-wrap: -1;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    & img{
      width: 20px;      
      margin-left: 7px;
      font-size: large;
      opacity: 0.6;
      cursor: pointer;      
    }
  }
`;
