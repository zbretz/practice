'use strict';
const { prependUUIDV4, ROLES_ID } = require('../../utils/db-utils');

const ROLES = [
	{ id: ROLES_ID.ADMIN, role: 'admin' },
	{ id: ROLES_ID.RECRUITER, role: 'recruiter' },
	{ id: ROLES_ID.APPLICANT, role: 'applicant' }
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
