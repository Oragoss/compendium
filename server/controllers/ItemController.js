'use strict'
const Item = require("../models/Item");
//Error: get `/`: `middleware` must be a function, not `undefined`
//This means that somewhere in the pipeline, there is an incomplete response or incomplete part of the abstraction.
class ItemController {
     /**
     * GET / - render index page, including README.md.
     */
    static async index(ctx) {
        ctx.body  = "Hello From ItemController!";
    }

    static async add(ctx) {
        const book = new Item({
            Title: 'Zildjian',
            Description: "A foreign book."
        });
        book.save().then(() => console.log(book.Title + " : " + book.Description));
        ctx.body  = "Check the console!";
    }
}

module.exports = ItemController;