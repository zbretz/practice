const { Admin, User } = require('../db/models/index');
const { joinConfig } = require('../utils/db-utils');
const { notFoundError, systemError } = require('../utils/utils');

const adminControllers = {};

adminControllers.getAllAdmins = async (req, res, next) => {
	try {
		const admins = await Admin.findAll(joinConfig(User));
		res.status(200).json(admins);
	} catch (e) {
		next(systemError(e));
	}
};

adminControllers.getAdminById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const admin = await Admin.findOne({
			...joinConfig(User),
			where: {
				user_id: id
			}
		});
		return admin ? res.status(200).json(admin) : next(notFoundError('Admin'));
	} catch (e) {
		next(systemError(e));
	}
};

module.exports = adminControllers;
