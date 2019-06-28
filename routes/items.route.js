const express = require('express');
const router = express.Router();

let itemController = require('../controllers/item.controller');

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItem);
router.post('/', itemController.createItem);
router.put('/', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;