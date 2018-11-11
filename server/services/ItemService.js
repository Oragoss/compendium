const Item = require("../models/Item");

class ItemService {
    static async addItem(item) {
        const book = new Item({
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
}

module.exports = ItemService;