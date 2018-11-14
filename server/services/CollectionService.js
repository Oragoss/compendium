const Collection = require("../models/Collection");

class ItemService {

    static async getCollection(id) {

    }
    static async addItem(item) {
        const book = new Collection({
            ItemBody:{
                Title: item.Title || 'NO BOOK TITLE',
                Description: item.Description || "NO DESCRIPTION",
            }
        });
        book.save(function (err, data) {
            if (err) console.error(err); //TODO: Replace this with a logger
            console.log("Data:", data);
        });
    }

    static async getItem(id) {

    }

    static async addCollection(collection) {

    }
}

module.exports = ItemService;