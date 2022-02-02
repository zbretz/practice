const chance = require('chance').Chance();
const { ROLES_ID } = require('../../../utils/db-utils');
const { v4: uuid } = require('uuid');

const USERS = Array(100)
	.fill(null)
	.map(() => {
		return {
			id: uuid(),
			email: chance.email(),
			password: chance.guid(),
			role_id: Object.values(ROLES_ID)[Math.floor(Math.random() * 3)],
			name: chance.name()
		};
	});

const APPLICANTS = USERS.filter((user) => user.role_id === ROLES_ID.APPLICANT).map((user) => ({
	user_id: user.id,
	experience: Math.floor(Math.random() * 20),
	linkedIn: `linkedin.com/in/${user.name.split(' ').join('-')}`,
	school: `${chance.province({ full: true })} University`
}));

const ADMINS = USERS.filter((user) => user.role_id === ROLES_ID.ADMIN).map((user) => ({
	user_id: user.id
}));

const RECRUITERS = USERS.filter((user) => user.role_id === ROLES_ID.RECRUITER).map((user) => ({
	user_id: user.id,
	region: chance.country({ full: true }),
	company_name: chance.company()
}));

const ROLES = [
	{ role: ROLES_ID.ADMIN },
	{ role: ROLES_ID.RECRUITER },
	{ role: ROLES_ID.APPLICANT }
];

module.exports = {
	USERS,
	ROLES,
	APPLICANTS,
	ADMINS,
	RECRUITERS
};
