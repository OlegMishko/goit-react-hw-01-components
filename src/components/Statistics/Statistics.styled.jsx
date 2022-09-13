import styled from 'styled-components';

export const SectionStatistics = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-top: ${p => p.theme.space[5]}px;
  box-shadow: 0px 5px 10px -4px #050505;
`;
export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
