const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Compendium', {useNewUrlParser: true});

// const AddCollection = (name, data) => {
    //TODO: Try to parameterize this
    const Collection = mongoose.model('Item', {
        Id: String,
        ItemBody: {
            Title: String,
            Description: String
        }
    });
// }

module.exports = Collection;