import React, { memo, useCallback, useEffect, useState } from 'react';

import Board from '../../components/Board';
import Panel from '../../components/Panel';

import api from '../../services/api';

import { Container } from './style';

const Home = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('brazil');
  const updateAt = new Date().toLocaleString();

  const getData = useCallback((country) => {
    api.getCountry(country)
      .then(data => setData(data));
  }, [])

  useEffect(() => {
    getData(country);
  }, [getData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };

  return(
    <Container>
      <Panel
        data={data}
        updateAt={updateAt}
        onChange={handleChange}
        country={country}
      />
      <Board data={data} />
    </Container>
  );
};

export default memo(Home);