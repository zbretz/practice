const { Role } = require('../db/models/index');
const { EXCLUDEDATES, systemError } = require('../utils/db-utils');

const roleControllers = {};

roleControllers.getAllRoles = async (_req, res, next) => {
	try {
		const roles = await Role.findAll({
			attributes: {
				exclude: EXCLUDEDATES
			}
		});
		res.status(200).json(roles);
	} catch (e) {
		next(systemError(e));
	}
};

roleControllers.getSingleRole = async (req, res, next) => {
	const { id } = req.params;
	try {
		const role = await Role.findOne({
			attributes: {
				exclude: EXCLUDEDATES
			},
			where: {
				id
			}
		});
		return role
			? res.status(200).json(role)
			: next(createError(404, 'Role id does not exist!'));
	} catch (e) {
		next(systemError(e));
	}
};

module.exports = roleControllers;
