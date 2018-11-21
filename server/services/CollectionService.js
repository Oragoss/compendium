const Collection = require("../models/Collection");

class CollectionService {

    static async getCollection(id) {

    }

    static async addCollection(data) {
        console.log("FASSD")
        console.log(JSON.parse(data));
        await Collection.sync().then(() => {
            const jData = JSON.parse(data);
            Collection.create({
                title: jData.title,
                subject: jData.subject,
                type: jData.type,
                description: jData.description,
                valid: jData.valid,
                creator: jData.creator,
                contributers: jData.contributers,
                coverage: jData.coverage,
                date: jData.date,
                format: jData.format,
                identifier: jData.identifier,
                language: jData.language,
                publisher: jData.publisher,
                relation: jData.relation,
                rights: jData.rights,
                source: jData.source
             });
         });
    }

    static async getCollection(id) {

    }
}

module.exports = CollectionService;