const { User } = require('../db/models/index');
const { EXCLUDEDATES, notFoundError, systemError, badRequest } = require('../utils/db-utils');
const { v4: uuid } = require('uuid');

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
		next(systemError(e));
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
		return user ? res.status(200).json(user) : next(notFoundError('User'));
	} catch (e) {
		next(systemError(e));
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
		return users ? res.status(200).json(users) : next(notFoundError('Users'));
	} catch (e) {
		next(systemError(e));
	}
};

userControllers.validatePost = (req, _res, next) => {
	if (
		['POST', 'PUT', 'PATCH'].includes(req.method.toUpperCase()) &&
		req.headers['content-type'] !== 'application/json'
	) {
		next(badRequest('Please changed Content-Type to application/json'));
	}
	next();
};

userControllers.createUser = async (req, res, next) => {
	try {
		const user = await User.create({ id: uuid(), ...req.body });
		return res.status(202).json(user);
	} catch (e) {
		next(systemError(e));
	}
};

module.exports = userControllers;
