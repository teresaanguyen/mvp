const axios = require('axios');
const config = require('../config');

module.exports = {
  getRecipeList: (req, res) => {
    axios.get(`${config.API_URL}/recipes/list`, {
      params: {from: '0', size: '20', tags: 'under_30_minutes', q: `${req.params.ingredient}`},
      headers: {
        'x-rapidapi-host': 'tasty.p.rapidapi.com',
        'x-rapidapi-key': `${config.API_KEY}`
      }
    })
    .then((response) => {
      // console.log('req.params.ingredient', req.params.ingredient)
      res.status(200).send(response.data.results)
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  getDetail: (req, res) => {
    axios.get(`${config.API_URL}/recipes/detail`, {
      params: {id: `${req.params.id}`},
      headers: {
        'x-rapidapi-host': 'tasty.p.rapidapi.com',
        'x-rapidapi-key': `${config.API_KEY}`
      }
    })
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  }
}

// var options = {
//   method: 'GET',
//   url: 'https://tasty.p.rapidapi.com/recipes/detail',
//   params: {id: '7954'},
//   headers: {
//     'x-rapidapi-host': 'tasty.p.rapidapi.com',
//     'x-rapidapi-key': 'apikey'
//   }
// };

// var options = {
//   method: 'GET',
//   url: 'https://tasty.p.rapidapi.com/recipes/list',
//   params: {from: '0', size: '20', tags: 'under_30_minutes', q: 'beef'},
//   headers: {
//     'x-rapidapi-host': 'tasty.p.rapidapi.com',
//     'x-rapidapi-key': 'apikey'
//   }
// };
