const { User, Applicant } = require('../db/models/index');
const { EXCLUDEDATES, joinConfig, notFoundError } = require('../utils/db-utils');
const createError = require('http-errors');
const {fake_user_table, applicants} = require('../dummy_data/applicantsData')

const applicantControllers = {};

applicantControllers.getAllApplicants = async (req, res, next) => {

	res.send(applicants)

	// try {
	// 	const applicants = await Applicant.findAll(joinConfig(User));
	// 	res.status(200).json(applicants);
	// } catch (e) {
	// 	next(createError(500, e));
	// }
};

applicantControllers.getApplicantById = async (req, res, next) => {
	try {
		const { id } = req.params;
		console.log(id)

		const applicant = applicants[id]

		return applicant ? res.status(200).json(applicant) : next(notFoundError('Applicant'));
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = applicantControllers;
