'use strict';

const { remap } = require('../../utils/db-utils');
const { interviewSchema } = require('../schema/interviewSchema');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('interviews', {
			...remap(Sequelize, interviewSchema),
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
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('interviews');
	}
};
