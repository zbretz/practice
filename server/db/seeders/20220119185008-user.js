'use strict';
const chance = require('chance').Chance();
const { prependUUIDV4, ROLES_ID } = require('../../utils/db-utils');

const USERS = Array(10)
	.fill(null)
	.map(() => {
		return {
			email: chance.email(),
			password: chance.guid(),
			role_id: Math.floor(Math.random() * 3) + 1,
			name: chance.name()
		};
	});

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
		const usersToInsert = prependUUIDV4(USERS);
		const applicants = usersToInsert.filter((user) => user.role_id === ROLES_ID.APPLICANT);
		const recruiters = usersToInsert.filter((user) => user.role_id === ROLES_ID.RECRUITER);
		const admins = usersToInsert.filter((user) => user.role_id === ROLES_ID.ADMIN);

		await queryInterface.bulkInsert('users', usersToInsert, {});
		await queryInterface.bulkInsert('applicants', applicants, {});
		await queryInterface.bulkInsert('recruiters', recruiters, {});
		await queryInterface.bulkInsert('admins', admins, {});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('users', null, {});
		await queryInterface.bulkDelete('applicants', null, {});
		await queryInterface.bulkDelete('recruiters', null, {});
		await queryInterface.bulkDelete('admins', null, {});
	}
};
