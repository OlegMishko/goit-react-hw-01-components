import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  margin-top: ${p => p.theme.space[5]}px;
  box-shadow: 0px 5px 10px -4px #050505;
`;
