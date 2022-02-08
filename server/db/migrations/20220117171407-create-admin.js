'use strict';

const { remap } = require('../../utils/db-utils');
const { adminSchema } = require('../schema/adminSchema');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('admins', {
			...remap(Sequelize, adminSchema),
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
		await queryInterface.dropTable('admins');
	}
};
