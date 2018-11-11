const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Compendium', {useNewUrlParser: true});

const Item = mongoose.model('Item', {
    id: String,
    title: String,
    description: String
});

module.exports = Item;