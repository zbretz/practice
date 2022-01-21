const applicantsRouter = require('express').Router();
const {
	getAllApplicants,
	mergeUsersAndApplicants,
	getApplicantById
} = require('../controllers/applicants');

applicantsRouter.use('/', mergeUsersAndApplicants);
applicantsRouter.get('/', getAllApplicants);
applicantsRouter.get('/:id', getApplicantById);

module.exports = applicantsRouter;
