import React, { memo } from 'react';

import {
  Container,
  Value,
  Label
} from './style';

function Card({ value, label }) {
  return (
    <Container>
      <Value>{value.toLocaleString()}</Value>
      <Label>{label}</Label>
    </Container>
  );
};

export default memo(Card);
