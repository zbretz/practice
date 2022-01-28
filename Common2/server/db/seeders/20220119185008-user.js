'use strict';
const { USERS, APPLICANTS, RECRUITERS, ADMINS } = require('./data/seed-data');

module.exports = {
	async up(queryInterface, Sequelize) {
		/*
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert('users', USERS, {});
		await queryInterface.bulkInsert('applicants', APPLICANTS, {});
		await queryInterface.bulkInsert('recruiters', RECRUITERS, {});
		await queryInterface.bulkInsert('admins', ADMINS, {});
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
