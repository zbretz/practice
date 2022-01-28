const { Op } = require('sequelize');
const { badRequest } = require('../utils/db-utils');
const { User } = require('../db/models/index');

const validations = {};

validations.validateRequest = (req, _res, next) => {
	if (
		['POST', 'PUT', 'PATCH'].includes(req.method.toUpperCase()) &&
		req.headers['content-type'] !== 'application/json'
	) {
		next(badRequest('Please change Content-Type to application/json'));
	}
	next();
};

validations.checkUserExistence = async (req, _res, next) => {
	const user = await User.findOne({
		where: {
			[Op.or]: [{ email: req.body.email }, { name: req.body.name }]
		}
	});
	if (user) {
		return next(badRequest('User already exists!'));
	}
	next();
};

module.exports = validations;
