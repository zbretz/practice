'use strict';

const { remap } = require('../../utils/db-utils');
const { applicantSchema } = require('../schema/applicantSchema');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('applicants', {
			...remap(Sequelize, applicantSchema),
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
		await queryInterface.dropTable('applicants');
	}
};
