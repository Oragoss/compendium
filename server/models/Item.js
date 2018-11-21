const Sequelize = require('sequelize');
const db = require('../db/dbConnection');

const Item = db.define('item', {
    title: {
      type: Sequelize.STRING
    },
    subject: {
      type: Sequelize.STRING
    },
    type: {
        type: Sequelize.JSON
      },
    description: {
        type: Sequelize.STRING
    },
    valid: {
        type: Sequelize.BOOLEAN
    },
    creator: {
        type: Sequelize.STRING
    },
    contributers: {
        type: Sequelize.JSON
    },
    coverage: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    format: {
        type: Sequelize.STRING
    },
    identifier: {
        type: Sequelize.STRING
    },
    language: {
        type: Sequelize.STRING
    },
    publisher: {
        type: Sequelize.STRING
    },
    relation: {
        type: Sequelize.STRING
    },
    rights: {
        type: Sequelize.STRING
    },
    source: {
        type: Sequelize.STRING
    },
    abstract: {
        type: Sequelize.STRING(2500)
    },
    accessRights: {
        type: Sequelize.STRING
    },
    accrualMethod: {
        type: Sequelize.STRING
    },
    accrualPeriodicity: {
        type: Sequelize.STRING
    },
    alternative: {
        type: Sequelize.STRING
    },
    audience: {
        type: Sequelize.STRING
    },
    available: {
        type: Sequelize.BOOLEAN
    },
    bibliographicCitation: {
        type: Sequelize.STRING
    },
    conformsTo: {
        type: Sequelize.STRING
    },
    created: {
        type: Sequelize.STRING
    },
    dateAccepted: {
        type: Sequelize.DATE
    },
    dateCopyrighted: {
        type: Sequelize.DATE
    },
    dateSubmitted: {
        type: Sequelize.DATE
    },
    educationLevel: {
        type: Sequelize.STRING
    },
    extent: {
        type: Sequelize.STRING
    },
    hasFormat: {
        type: Sequelize.STRING
    },
    hasPart: {
        type: Sequelize.STRING
    },
    hasVersion: {
        type: Sequelize.STRING
    },
    instructionalMethod: {
        type: Sequelize.STRING
    },
    isFormatOf: {
        type: Sequelize.STRING
    },
    isPartOf: {
        type: Sequelize.STRING
    },
    isReferencedBy: {
        type: Sequelize.STRING
    },
    isReplacedBy: {
        type: Sequelize.STRING
    },
    isRequiredBy: {
        type: Sequelize.STRING
    },
    issued: {
        type: Sequelize.STRING
    },
    isVersionOf: {
        type: Sequelize.STRING
    },
    license: {
        type: Sequelize.STRING
    },
    mediator: {
        type: Sequelize.STRING
    },
    medium: {
        type: Sequelize.STRING
    },
    modified: {
        type: Sequelize.STRING
    },
    provenance: {
        type: Sequelize.STRING
    },
    references: {
        type: Sequelize.STRING
    },
    replaces: {
        type: Sequelize.STRING
    },
    requires: {
        type: Sequelize.STRING
    },
    rightsHolder: {
        type: Sequelize.STRING
    },
    spatial: {
        type: Sequelize.STRING
    },
    tableOfContents: {
        type: Sequelize.STRING
    },
    temporal: {
        type: Sequelize.STRING
    },
    collectionID: {
        type: Sequelize.INTEGER
    }
});

module.exports = Item;