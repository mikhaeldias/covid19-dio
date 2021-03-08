import React, { memo } from 'react';

import COUNTRIES from '../../commons/constants/countries'

import {
  Menu,
  Container,
  Title,
  Description,
  Info,
  Select
} from './style';

const Panel = ({ data, updateAt, onChange, country }) => {
  const renderCountries = (country, index) => (
    <Menu key={`country-${index}`} value={country.value}>
        {country.label}
    </Menu>
  );

  return (
    <Container>
      <Title>COVID19</Title>
      <Description>Painel Coronavírus</Description>
      <Select onChange={onChange} value={country}>
        {COUNTRIES.map(renderCountries)}
      </Select>
      <Info>Atualizado em: {updateAt}</Info>
    </Container>
  );
};

export default memo(Panel);
