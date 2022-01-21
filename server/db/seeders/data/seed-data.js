const chance = require('chance').Chance();
const { ROLES_ID } = require('../../../utils/db-utils');

exports.USERS = Array(10)
	.fill(null)
	.map(() => {
		return {
			email: chance.email(),
			password: chance.guid(),
			role_id: Math.floor(Math.random() * 3) + 1,
			name: chance.name()
		};
	});

exports.ROLES = [
	{ id: ROLES_ID.ADMIN, role: 'admin' },
	{ id: ROLES_ID.RECRUITER, role: 'recruiter' },
	{ id: ROLES_ID.APPLICANT, role: 'applicant' }
];
