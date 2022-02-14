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
		//this does not work
		let { id } = req.params.id;
		//this does work
		id = String(req.params.id)
		console.log(String(id))

		const recruiter = await Recruiter.findOne({
			...joinConfig(User),
			where: {
				firebase_id: id
			}
		});
		return recruiter
			? res.status(200).json(remapResponse(recruiter))
			: next(notFoundError('Recruiter'));
	} catch (e) {
		next(systemError(e));
	}
};

module.exports = recruiterControllers;
