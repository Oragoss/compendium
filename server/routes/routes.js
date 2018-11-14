'use strict';

const router = require('koa-router')(); // router middleware for koa

const CollectionController = require('../controllers/CollectionController');

router.get('/api/collection', CollectionController.index);
router.get('/api/collection/getItem', CollectionController.getItem);
router.post('/api/collection/addItem', CollectionController.addItem);
router.post('/api/collection/updateItem', CollectionController.updateItem);
router.post('/api/collection/addCollection', CollectionController.addCollection);


router.get( '/api/bodyTest', CollectionController.getBodyTest);
router.get( '/api/postBodyTest', CollectionController.postBodyTest);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = router.middleware();