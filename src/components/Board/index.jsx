import React, { memo } from 'react';

import Card from '../Card';

import { Container, Item } from './style'

function Board({ data }) {
  const { cases, todayCases, deaths, todayDeaths, recovered, casesPerOneMillion, deathsPerOneMillion } = data;
  
  const getValue = (value) => value ? value : '-';

  return (
    <Container>
      <Item>
        <Card label="Total de casos" value={getValue(cases)} />
      </Item>
      <Item>
        <Card label="Casos hoje" value={getValue(todayCases)} />
      </Item>
      <Item>
        <Card label="Óbitos hoje" value={getValue(todayDeaths)} />
      </Item>
      <Item>
        <Card label="Total de óbitos" value={getValue(deaths)} />
      </Item>
      <Item>
        <Card label="Total de recuperados" value={getValue(recovered)} />
      </Item>
      <Item>
        <Card label="Casos a cada um milhão de pessoas" value={getValue(casesPerOneMillion)} />
      </Item>
      <Item>
        <Card label="Óbitos a cada um milhão de pessoas" value={getValue(deathsPerOneMillion)} />
      </Item>
    </Container>
  );
};

export default memo(Board);