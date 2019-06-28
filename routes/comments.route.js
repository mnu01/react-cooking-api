const express = require('express');
const router = express.Router();

let commentController = require('../controllers/comment.controller');

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getComment);
router.post('/', commentController.createComment);
router.put('/', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;