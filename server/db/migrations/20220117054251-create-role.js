'use strict';
const { remap } = require('../../utils/db-utils');
const roleSchema = require('../schema/role');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Roles', {
			...remap(Sequelize, roleSchema),
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Roles');
	}
};
