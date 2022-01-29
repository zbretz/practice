const { Op } = require('sequelize');
const { User, Applicant, Recruiter, Admin } = require('../db/models/index');
const { EXCLUDEDATES, ROLES_ID } = require('../utils/db-utils');
const { notFoundError, systemError, badRequest } = require('../utils/utils');
const { v4: uuid } = require('uuid');

const MODELS = {
	[ROLES_ID.ADMIN]: Admin,
	[ROLES_ID.RECRUITER]: Recruiter,
	[ROLES_ID.APPLICANT]: Applicant
};

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

userControllers.checkUserExistence = async (req, _res, next) => {
	const user = await User.findOne({
		where: {
			[Op.or]: [{ email: req.body.email }, { name: req.body.name }]
		}
	});
	const additional = user?.active ? '' : ' but deactivated';
	return user ? next(badRequest(`User already exists${additional}!`)) : next();
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

userControllers.createUser = async (req, res, next) => {
	let createdUser;
	try {
		const id = uuid();
		createdUser = await User.create({ id, ...req.body });
		await MODELS[req.body.role_id].create({ user_id: id });
		return res.status(202).json(createdUser);
	} catch (e) {
		if (createdUser) {
			await User.destroy({ where: { ...req.body } });
		}
		next(systemError(e));
	}
};

userControllers.deactivateUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		const userUpdated = await User.update({ active: false }, { where: { id, active: true } });
		return userUpdated[0]
			? res.status(200).send('User successfully deactivated')
			: next(badRequest('User has already been deactivated'));
	} catch (e) {
		next(systemError(e));
	}
};

module.exports = userControllers;
