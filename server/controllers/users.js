const { User } = require('../db/models/index');
const { EXCLUDEDATES } = require('../utils/db-utils');
const createError = require('http-errors');

const userControllers = {};

userControllers.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.findAll({
			attributes: {
				exclude: EXCLUDEDATES
			}
		});
		res.status(200).json(users);
	} catch (e) {
		next(createError(500, e));
	}
};

userControllers.getUserById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const user = await User.findOne({
			attributes: {
				exclude: EXCLUDEDATES
			},
			where: {
				id
			}
		});
		return user ? res.status(200).json(user) : next(createError(404, 'User not found'));
	} catch (e) {
		next(createError(500, e));
	}
};

userControllers.getUsersByRole = async (req, res, next) => {
	const { role_id } = req.params;
	try {
		const users = await User.findAll({
			attributes: {
				exclude: EXCLUDEDATES
			},
			where: {
				role_id
			}
		});
		return users
			? res.status(200).json(users)
			: next(createError(404, 'Users not found with that role'));
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = userControllers;
