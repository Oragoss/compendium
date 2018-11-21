'use strict'
const CollectionService = require("../services/CollectionService");

//Error: get `/`: `middleware` must be a function, not `undefined`
//This means that somewhere in the pipeline, there is an incomplete response or incomplete part of the abstraction.
class CollectionController {
     /*
     * GET / - render index page, including README.md.
     */
    static async index(context) {
        //Return all collections
        context.body  = "Hello From CollectionController!";
    }

    static async addCollection(context) {

    }

    static async updateCollection(context) {
        //TODO: Get the collection associated with this item
        //TODO: Get the item by its id
        //Update the fields by all properties that aren't null
    }

    static async getCollection(context) {
        //TODO: Get the item by id in a collection AND the id of the item
    }

    static async deleteCollection(context) {

    }
}

module.exports = CollectionController;