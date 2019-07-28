'use strict';

const router = require('koa-router')(); // router middleware for koa

const CollectionController = require('../controllers/CollectionController');
const ItemController = require('../controllers/ItemController');

router.get('/api/collection', CollectionController.index);
/*
    Will we ever return a list of all items in a collection?
    if so....
*/
router.get('/api/collection', ItemController.index);
router.get('/api/collection/getItem', ItemController.getItem);
router.post('/api/collection/addItem', ItemController.addItem);
router.post('/api/collection/updateItem', ItemController.updateItem);
router.post('/api/collection/deleteItem', ItemController.deleteItem);
router.post('/api/collection/addCollection', CollectionController.addCollection);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = router.middleware();