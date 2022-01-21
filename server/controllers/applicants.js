const { User, Applicant, sequelize } = require('../db/models/index');
const { EXCLUDEDATES, FINDALLCONFIG } = require('../utils/db-utils');
const createError = require('http-errors');

const applicantControllers = {};

applicantControllers.mergeUsersAndApplicants = async (req, res, next) => {
	try {
		console.log();
		const applicants = await Applicant.findAll(FINDALLCONFIG(User));
		req.applicants = applicants;
		next();
	} catch (e) {
		next(createError(500, e));
	}
};

applicantControllers.getAllApplicants = async (req, res, next) => {
	try {
		res.status(200).json(req.applicants);
	} catch (e) {
		next(createError(500, e));
	}
};

applicantControllers.getApplicantById = async (req, res, next) => {
	try {
		const { applicants } = req;
		const { id } = req.params;
		const applicant = applicants.find((user) => user.user_id === id);
		return applicant
			? res.status(200).json(applicant)
			: next(createError(404, 'Applicant not found'));
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = applicantControllers;
