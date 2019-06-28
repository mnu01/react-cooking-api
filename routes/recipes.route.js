const express = require('express');
const router = express.Router();

let recipeController = require('../controllers/recipe.controller');

router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipe);
router.post('/', recipeController.createRecipe);
router.put('/', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;