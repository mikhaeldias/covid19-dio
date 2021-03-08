import styled from 'styled-components';

export const Menu = styled.option``;

export const Container = styled.div`
  width: calc(100% - 48px);
  max-width: 912px;
  background-color: #fff;
  margin: 12px;
  padding: 18px 36px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #961128;
`;

export const Description = styled.h2`
  font-size: 18px;
`;

export const Select = styled.select`
  width: 200px;
  margin-top: 12px;
`;

export const Info = styled.span`
  margin-top: 4px;
  font-size: 12px;
  color: #a8a8a8;
`;
