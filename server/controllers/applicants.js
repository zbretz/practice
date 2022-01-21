const { User, Applicant, sequelize } = require('../db/models/index');
const { EXCLUDEDATES, joinConfig } = require('../utils/db-utils');
const createError = require('http-errors');

const applicantControllers = {};

applicantControllers.getAllApplicants = async (req, res, next) => {
	try {
		const applicants = await Applicant.findAll(joinConfig(User));
		res.status(200).json(applicants);
		next();
	} catch (e) {
		next(createError(500, e));
	}
};

applicantControllers.getApplicantById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const applicant = await Applicant.findOne({
			...joinConfig(User),
			where: {
				user_id: id
			}
		});
		return applicant
			? res.status(200).json(applicant)
			: next(createError(404, 'Applicant not found'));
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = applicantControllers;
