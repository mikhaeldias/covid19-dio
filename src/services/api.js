import axios from 'axios';

const path = 'https://coronavirus-19-api.herokuapp.com/countries';

function getCountry(country) {
  return axios.get(`${path}/${country}`)
      .then((response) => response.data);
}

export default { getCountry };

// const path = 'https://coronavirus-19-api.herokuapp.com/countries'

// const headers = {
//   method: 'get',
//   mode: 'cors',
//   cache: 'default'
// }

// function getCountry(country) {
//   return fetch(`${path}/${country}`, headers)
//     .then((response) => response.json())
// }

// export default {
//   getCountry
// }