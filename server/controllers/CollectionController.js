'use strict'
const CollectionService = require("../services/CollectionService");

//Error: get `/`: `middleware` must be a function, not `undefined`
//This means that somewhere in the pipeline, there is an incomplete response or incomplete part of the abstraction.
class ItemController {
     /*
     * GET / - render index page, including README.md.
     */
    static async index(context) {
        //Return all collections
        context.body  = "Hello From ItemController!";
    }

    static async addCollection(context) {

    }

    static async addItem(context) {
        //TODO: Get the collection associated with this item
        //TODO: Add the item

        //TODO: obviously change this to be the ctx.request.Title, ctx.request.Description etc.
        const book = {
            Title: 'Zildjian',
            Description: "A foreign book.",
        }

        CollectionService.addItem(book);
        context.body  = "Check the console!";
    }

    static async updateItem(context) {
        //TODO: Get the collection associated with this item
        //TODO: Get the item by its id
        //Update the fields by all properties that aren't null
    }

    static async getItem(context) {
        //TODO: Get the item by id in a collection AND the id of the item
    }



    //TODO: Clean this up

    static async getBodyTest(context) {
        context.response.status = 404;
        // context.response.message = {greeting: "Hi"}
        context.response.body  = {greeting: "Hi"};
    }

    //TODO: Send a json response to this method
    static async postBodyTest(context) {
        context.response.status = 404;
        // context.response.message = {greeting: "Hi"}
        console.log(context.request);
    }
}

module.exports = ItemController;