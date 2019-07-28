'use strict'
import ItemService from '../services/ItemService';

class ItemController {
    static async index(context) {

        context.body  = "Hello From CollectionController!";
    }

    static async addItem(context) {
        context.body  = context.request.body;
        // console.log(context.body);
        ItemService.addItem(context.body);
    }

    static async updateItem(context) {
        //TODO: Get the collection associated with this item
        //TODO: Get the item by its id
        //Update the fields by all properties that aren't null
    }

    static async getItem(context) {
        //TODO: Get the item by id in a collection AND the id of the item
    }

    static async deleteItem(context) {

    }
}

module.exports = ItemController;