const express = require('express');
const controller = require('./controller.js')

const routerRecipe = express.Router();

routerRecipe.route('/list/:ingredient')
  .get(controller.getRecipeList)

routerRecipe.route('/detail/:id')
  .get(controller.getDetail)

module.exports = routerRecipe;