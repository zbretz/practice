const { User, Applicant } = require('../db/models/index');
const { EXCLUDEDATES, joinConfig, notFoundError } = require('../utils/db-utils');
const createError = require('http-errors');

const applicantControllers = {};

applicantControllers.getAllApplicants = async (req, res, next) => {
	try {
		const applicants = await Applicant.findAll(joinConfig(User));
		res.status(200).json(applicants);
	} catch (e) {
		next(createError(500, e));
	}
};

applicantControllers.getApplicantById = async (req, res, next) => {
	try {
		const { id } = req.params;
		// const applicant = await Applicant.findOne({
		// 	...joinConfig(User),
		// 	where: {
		// 		user_id: id
		// 	}
		// });

		const applicant =
		{	id: 1,
			user_id: "007",
			experience: "1 year",
			linkedIn: "fakeperson@linkedin.com",
			school: "Hack Reactor",
			desired_position: "Full-stack Developer",
			desired_industry:"Tech",
			desired_company_size: "Small",
			desired_company_stage: "Start Up",
			desired_region: "Remote",
			resume: "/myresume/fakeperson",
			role: "applicant",
			email: "test5@test.com",
			password: "yeqpuUbjdsTMYEfD3OcjwEL7AAk1",
			name: "Bob Saget"
		}

		return applicant ? res.status(200).json(applicant) : next(notFoundError('Applicant'));
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = applicantControllers;
