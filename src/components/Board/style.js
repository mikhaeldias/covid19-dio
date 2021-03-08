import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 288px;
  margin: 12px;
  @media(max-width: 1080px) {
    width: calc(100% - 24px);
  }
`;
