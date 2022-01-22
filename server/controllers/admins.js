const { Admin, User } = require('../db/models/index');
const { EXCLUDEDATES, joinConfig, notFoundError } = require('../utils/db-utils');
const createError = require('http-errors');

const adminControllers = {};

adminControllers.getAllAdmins = async (req, res, next) => {
	try {
		const admins = await Admin.findAll(joinConfig(User));
		res.status(200).json(admins);
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = adminControllers;
