const { User, Applicant } = require('../db/models/index');
const { joinConfig } = require('../utils/db-utils');
const { notFoundError, systemError, remapResponse, remapResponses } = require('../utils/utils');
const {fake_user_table, applicants} = require('../dummy_data/applicantsData')

const applicantControllers = {};

applicantControllers.getAllApplicants = async (req, res, next) => {

	try {
		const applicants = await Applicant.findAll(joinConfig(User));
		// res.send(applicants)
		res.status(200).json(remapResponses(applicants));
	} catch (e) {
		next(systemError(e));
	}
};

applicantControllers.getApplicantById = async (req, res, next) => {
	try {
		const { id } = req.params;
		console.log(id)

		const applicant = applicants[id]

		return applicant ? res.status(200).json(applicant) : next(notFoundError('Applicant'));

		// const applicant = await Applicant.findOne({
		// 	...joinConfig(User),
		// 	where: {
		// 		user_id: id
		// 	}
		// });
		// return applicant
		// 	? res.status(200).json(remapResponse(applicant))
		// 	: next(notFoundError('Applicant'));

	} catch (e) {
		next(systemError(e));
	}
};

module.exports = applicantControllers;
