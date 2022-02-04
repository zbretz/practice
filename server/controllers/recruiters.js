const { User, Recruiter } = require('../db/models/index');
const { joinConfig } = require('../utils/db-utils');
const { notFoundError, systemError, remapResponse, remapResponses } = require('../utils/utils');

const recruiterControllers = {};

recruiterControllers.getAllRecruiters = async (req, res, next) => {
	try {
		const recruiters = await Recruiter.findAll(joinConfig(User));
		res.status(200).json(remapResponses(recruiters));
	} catch (e) {
		next(systemError(e));
	}
};

recruiterControllers.getRecruiterById = async (req, res, next) => {
	try {
		const { id } = req.params.id;

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


		// const recruiter = await Recruiter.findOne({
		// 	...joinConfig(User),
		// 	where: {
		// 		user_id: id
		// 	}
		// });
		// return recruiter
		// 	? res.status(200).json(remapResponse(recruiter))
		// 	: next(notFoundError('Recruiter'));
	} catch (e) {
		next(systemError(e));
	}
};

module.exports = recruiterControllers;
