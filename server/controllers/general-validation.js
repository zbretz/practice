const { badRequest } = require('../utils/db-utils');

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

module.exports = validations;
