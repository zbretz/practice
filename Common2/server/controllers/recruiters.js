const { User, Recruiter } = require('../db/models/index');
const { EXCLUDEDATES, joinConfig, notFoundError } = require('../utils/db-utils');
const createError = require('http-errors');

const recruiterControllers = {};

recruiterControllers.getAllRecruiters = async (req, res, next) => {
	try {
		const recruiters = await Recruiter.findAll(joinConfig(User));
		res.status(200).json(recruiters);
	} catch (e) {
		next(createError(500, e));
	}
};

recruiterControllers.getRecruiterById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const recruiter = await Recruiter.findOne({
			...joinConfig(User),
			where: {
				user_id: id
			}
		});
		return recruiter ? res.status(200).json(recruiter) : next(notFoundError('Recruiter'));
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = recruiterControllers;
