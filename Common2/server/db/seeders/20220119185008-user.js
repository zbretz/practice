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

		//applicant1
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

		//applicant2
		await queryInterface.bulkInsert('users',
		[{
			id: '19f20fd8-8dcd-45ed-abaa-1ef36d301c98',
			email: 'poophead@test.com',
			password: 'easypass',
			role_id: 'applicant',
			name: 'farty brain'
		}],  {});

		await queryInterface.bulkInsert('applicants',
			[{
				user_id: '19f20fd8-8dcd-45ed-abaa-1ef36d301c98',
				experience: 3,
				linkedIn: `linkedin.com/in/fartybrain`,
				school: `$Clown University`
			}],  {});


		await queryInterface.bulkInsert('users',
		[{
			id: '0246c9b0-07c1-46b1-98fd-2fba1b164d72',
			email: 'poopheadrecruiter@test.com',
			password: 'easypass',
			role_id: 'recruiter',
			name: 'recruiter head'
		}],  {})

		await queryInterface.bulkInsert('recruiters',
		[{
			user_id: '0246c9b0-07c1-46b1-98fd-2fba1b164d72',
			firebase_id: "GgaRWJL6UAQ6I75YHxltByzmshh2",
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
