const Sequelize = require('sequelize');
const db = require('../db/dbConnection');

const Collection = db.define('collection', {
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
});

module.exports = Collection;