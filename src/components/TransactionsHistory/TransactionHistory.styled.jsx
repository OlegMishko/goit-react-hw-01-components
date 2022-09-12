import styled from "styled-components";

export const Table  = styled.table`
table-layout: fixed;
  width: 100%;
  margin-top: 10px;
  margin-top: ${p => p.theme.space[5]}px;
  
  box-shadow: 0px 5px 10px -4px #050505;
`;

export const TableData = styled.td`
//   align-text: center;
  padding:  ${p => p.theme.space[4]}px;
`;
