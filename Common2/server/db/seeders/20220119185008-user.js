'use strict';
const { USERS, APPLICANTS, RECRUITERS, ADMINS } = require('./data/seed-data');
const {Recruiter} = require('../models/recruiter')

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
		// await queryInterface.upsert('recruiters', {firebase_id: "GgaRWJL6UAQ6I75YHxltByzmshh2"}, {where: {
		// {email:"winibhan@vehof.ne"}}
		// )
		await queryInterface.bulkInsert('users',
			[{
				id: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
				email: 'poophead@test.com',
				password: 'easypass',
				role_id: 'applicant',
				name: 'poop head'
			}],  {});

	await queryInterface.bulkInsert('applicants',
		[{
			user_id: '0246c9b0-07c1-46b1-98fd-2fba1b164d71',
			experience: 1,
			linkedIn: `linkedin.com/in/poophead`,
			school: `$Clown University`
		}],  {});


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
