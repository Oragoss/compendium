const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Compendium', {useNewUrlParser: true});

const Item = mongoose.model('Item', {
    Id: String,
    ItemBody: {
        Title: String,
        Description: String
    }
});

module.exports = Item;