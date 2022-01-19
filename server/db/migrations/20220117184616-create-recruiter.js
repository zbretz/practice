'use strict';

const { remap } = require('../../utils/db-utils');
const { recruiterSchema } = require('../schema/recruiterSchema');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('recruiters', {
			...remap(Sequelize, recruiterSchema),
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
		await queryInterface.dropTable('recruiters');
	}
};
