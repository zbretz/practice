'use strict';

const { remap } = require('../../utils/db-utils');
const { evaluationSchema } = require('../schema/evaluationSchema');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evaluations', {
      ...remap(Sequelize, evaluationSchema)
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('evaluations');
  }
};