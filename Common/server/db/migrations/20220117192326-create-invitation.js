'use strict';

const { remap } = require('../../utils/db-utils');
const { invitationSchema } = require('../schema/invitationSchema');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('invitations', {
			...remap(Sequelize, invitationSchema),
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
		await queryInterface.dropTable('invitations');
	}
};
