const { Op } = require('sequelize');
const { User, Applicant, Recruiter, Admin } = require('../db/models/index');
const {
	EXCLUDEDATES,
	ROLES_ID,
	notFoundError,
	systemError,
	badRequest
} = require('../utils/db-utils');
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

userControllers.validateRequest = (req, _res, next) => {
	if (
		['POST', 'PUT', 'PATCH'].includes(req.method.toUpperCase()) &&
		req.headers['content-type'] !== 'application/json'
	) {
		next(badRequest('Please changed Content-Type to application/json'));
	}
	next();
};

userControllers.checkUserExistence = async (req, _res, next) => {
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

module.exports = userControllers;
