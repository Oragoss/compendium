'use strict';

const router = require('koa-router')(); // router middleware for koa

const ItemController = require('../controllers/ItemController');


router.get( '/item', ItemController.index);
router.get( '/api/add', ItemController.add);

// router.post('/contact', www.processContact); // process contact request


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = router.middleware();