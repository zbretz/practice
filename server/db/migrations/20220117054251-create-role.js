'use strict';
const { remap } = require('../../utils/db-utils');
const { roleSchema } = require('../schema/roleSchema');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('roles', {
			...remap(Sequelize, roleSchema),
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
		await queryInterface.dropTable('roles');
	}
};
