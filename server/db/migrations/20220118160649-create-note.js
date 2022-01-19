'use strict';

const { remap } = require('../../utils/db-utils');
const { noteSchema } = require('../schema/noteSchema');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('notes', {
			...remap(Sequelize, noteSchema),
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
		await queryInterface.dropTable('notes');
	}
};
