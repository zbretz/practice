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
		// const recruiter = await Recruiter.findOne({
		// 	...joinConfig(User),
		// 	where: {
		// 		user_id: id
		// 	}

		const recruiter = {
			id: 2,
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
			role: "recruiter",
			email: "test5@test.com",
			password: "yeqpuUbjdsTMYEfD3OcjwEL7AAk1",
			name: "Robert Saget"
		}


		return recruiter ? res.status(200).json(recruiter) : next(notFoundError('Recruiter'));
	} catch (e) {
		next(createError(500, e));
	}
};

module.exports = recruiterControllers;
