const db = require('../db/dbConnection');
const Item = require('../models/Item');
const Collection = require('../models/Collection');

class ItemService {
    static async addItem(data) {
        //Use the findOrCreate method to return a callback if the item already exists
       await Item.sync().then(() => {
           const jData = JSON.parse(data);
            Item.create({
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
                source: jData.source,
                abstract: jData.abstract,
                accessRights: jData.accessRights,
                accrualMethod: jData.accrualMethod,
                accrualPeriodicity: jData.accrualPeriodicity,
                alternative: jData.alternative,
                audience: jData.audience,
                available: jData.available,
                bibliographicCitation: jData.bibliographicCitation,
                conformsTo: jData.conformsTo,
                created: jData.created,
                dateAccepted: jData.dateAccepted,
                dateCopyrighted: jData.dateCopyrighted,
                dateSubmitted: jData.dateSubmitted,
                educationLevel: jData.educationLevel,
                extent: jData.extent,
                hasFormat: jData.hasFormat,
                hasPart: jData.hasPart,
                hasVersion: jData.hasVersion,
                instructionalMethod: jData.instructionalMethod,
                isFormatOf: jData.isFormatOf,
                isPartOf: jData.isPartOf,
                isReferencedBy: jData.isReferencedBy,
                isReplacedBy: jData.isReplacedBy,
                isRequiredBy: jData.isRequiredBy,
                issued: jData.issued,
                isVersionOf: jData.isVersionOf,
                license: jData.license,
                mediator: jData.mediator,
                medium: jData.medium,
                modified: jData.modified,
                provenance: jData.provenance,
                references: jData.references,
                replaces: jData.replaces,
                requires: jData.requires,
                rightsHolder: jData.rightsHolder,
                spatial: jData.spatial,
                tableOfContents: jData.tableOfContents,
                temporal: jData.temporal
            });
        });

        //TODO: Fix this foreign key
        //Item.belongsTo(Collection.whatever)
    }

    static async findItem(id) {

    }

    static async updateItem(jData) {

    }

    static async deleteItem(id) {

    }
}

module.exports = ItemService;