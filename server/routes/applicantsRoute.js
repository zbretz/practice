const applicantsRouter = require('express').Router();
const { getAllApplicants, getApplicantById } = require('../controllers/applicants');

applicantsRouter.get('/', getAllApplicants);
applicantsRouter.get('/:id', getApplicantById);

module.exports = applicantsRouter;
