'use strict';

const { remap } = require('../../utils/db-utils');
const { evaluationSchema } = require('../schema/evaluationSchema');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evaluations', {
      ...remap(Sequelize, evaluationSchema),
      createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			}
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('evaluations');
  }
};