'use strict'
const Item = require("../models/Item");
const ItemService = require("../services/ItemService");

//Error: get `/`: `middleware` must be a function, not `undefined`
//This means that somewhere in the pipeline, there is an incomplete response or incomplete part of the abstraction.
class ItemController {
     /**
     * GET / - render index page, including README.md.
     */
    static async index(ctx) {
        ctx.body  = "Hello From ItemController!";
    }

    static async addItem(ctx) {
        // const book = new Item({
        //     ItemBody:{
        //         Title: 'Zildjian',
        //         Description: "A foreign book.",
        //     }
        // });
        // book.save(function (err, data) {
        //     if (err) console.error(err); //TODO: Replace this with a logger
        //     console.log("Data:", data);
        // });

        
        ctx.body  = "Check the console!";
    }
}

module.exports = ItemController;