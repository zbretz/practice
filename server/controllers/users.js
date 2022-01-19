const { User } = require('../db/models/index');
const { EXCLUDEDATES } = require('../utils/db-utils');
const createError = require('http-errors');

const userControllers = {};

userControllers.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.findAll({
			attributes: EXCLUDEDATES
		});
		res.status(200).json(users);
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = userControllers;
