'use strict';
const { prependUUIDV4 } = require('../../utils/db-utils');

const ROLES = [
	{ id: 1, role: 'admin' },
	{ id: 2, role: 'recruiter' },
	{ id: 3, role: 'applicant' }
];

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert('roles', ROLES, {});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('roles', null, {});
	}
};
