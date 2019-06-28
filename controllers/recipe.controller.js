const recipeModel = require('../models/recipe.model');

module.exports.getRecipe = (request, response) => {
    recipeModel.findById(request.params.id, (error, recipe) => {
        response.send(recipe);
    });
};

module.exports.getAllRecipes = (request, response) => {
    recipeModel.find({}, (error, recipes) => {
        response.send(recipes);
    });
};

module.exports.createRecipe = (request, response) => {
    let recipe = new recipeModel({
        name: request.body.name,
        difficulty: request.body.difficulty,
        image: request.body.image
    });

    recipe.save((error, recipe) => {
        if (error) {
            // return next(error);
            response.send(`Can't create recipe: ${error.message}`);
            console.log(error.message);
        }
        else {
            response.send(recipe.id);
        }
    });
};

module.exports.updateRecipe = (request, response) => {
    recipeModel.findById(request.body.id, (error, recipe) => {
        recipe.name = request.body.name;
        recipe.difficulty = request.body.difficulty;
        recipe.image = request.body.image;
        recipe.save((error, recipe) => {
            if (error) {
                // return next(error);
                response.send(`Can't update recipe: ${error.message}`);
            }
            else {
                response.send(recipe.id);
            }
        });
    });
};

module.exports.deleteRecipe = (request, response) => {
    recipeModel.findByIdAndDelete(request.body.id, (error, recipe) => {
        if (error) {
            // return next(error);
            response.send(`Can't delete recipe: ${error.message}`);
        }
        else {
            response.send(recipe.id);
        }
    });
};
