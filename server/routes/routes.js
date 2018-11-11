'use strict';

const router = require('koa-router')(); // router middleware for koa

const ItemController = require('../controllers/ItemController');
//TODO: Should I use static functions? While easier, is it a performance hit?
// const itemController = new ItemController();

router.get( '/api/item', ItemController.index);
router.get( '/api/addItem', ItemController.addItem);

// router.post('/contact', www.processContact); // process contact request


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = router.middleware();