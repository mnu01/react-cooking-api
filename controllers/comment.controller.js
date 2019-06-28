const commentModel = require('../models/comment.model');

module.exports.getComment = (request, response) => {
    commentModel.findById(request.params.id, (error, comment) => {
        response.send(comment);
    });
};

module.exports.getAllComments = (request, response) => {
    commentModel.find({}, (error, comments) => {
        response.send(comments);
    });
};

module.exports.createComment = (request, response) => {
    let comment = new commentModel({
        author: request.body.author,
        content: request.body.content,
        recipeId: request.body.recipeId,
        dateCreation: new Date(),
        dateModification: null
    });

    comment.save((error, comment) => {
        if (error) {
            // return next(error);
            response.send(`Can't create comment: ${error.message}`);
            console.log(error.message);
        }
        else {
            response.send(comment.id);
        }
    });
};

module.exports.updateComment = (request, response) => {
    commentModel.findById(request.body.id, (error, comment) => {
        comment.content = request.body.content;
        comment.dateModification = new Date();
        comment.save((error, comment) => {
            if (error) {
                // return next(error);
                response.send(`Can't update comment: ${error.message}`);
            }
            else {
                response.send(comment.id);
            }
        });
    });
};

module.exports.deleteComment = (request, response) => {
    commentModel.findByIdAndDelete(request.body.id, (error, comment) => {
        if (error) {
            // return next(error);
            response.send(`Can't delete comment: ${error.message}`);
        }
        else {
            response.send(comment.id);
        }
    });
};
