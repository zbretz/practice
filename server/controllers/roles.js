const { Role } = require('../db/models/index');
const createError = require('http-errors');

const getAllRoles = async (_req, res, next) => {
	try {
		console.log(Role);
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = {
	getAllRoles
};
