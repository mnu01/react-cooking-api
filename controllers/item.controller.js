const itemModel = require('../models/item.model');

module.exports.getItem = (request, response) => {
    itemModel.findById(request.params.id, (error, item) => {
        response.send(item);
    });
};

module.exports.getAllItems = (request, response) => {
    itemModel.find({}, (error, items) => {
        response.send(items);
    });
};

module.exports.createItem = (request, response) => {
    let item = new itemModel({
        name: request.body.name,
        quantity: request.body.quantity,
        image: request.body.image,
        recipeId: request.body.recipeId
    });

    item.save((error, item) => {
        if (error) {
            // return next(error);
            response.send(`Can't create item: ${error.message}`);
            console.log(error.message);
        }
        else {
            response.send(item.id);
        }
    });
};

module.exports.updateItem = (request, response) => {
    itemModel.findById(request.body.id, (error, item) => {
        item.name = request.body.name;
        item.quantity = request.body.quantity;
        item.image = request.body.image;
        item.save((error, item) => {
            if (error) {
                // return next(error);
                response.send(`Can't update item: ${error.message}`);
            }
            else {
                response.send(item.id);
            }
        });
    });
};

module.exports.deleteItem = (request, response) => {
    itemModel.findByIdAndDelete(request.body.id, (error, item) => {
        if (error) {
            // return next(error);
            response.send(`Can't delete item: ${error.message}`);
        }
        else {
            response.send(item.id);
        }
    });
};
