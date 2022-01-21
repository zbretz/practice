const applicantsRouter = require('express').Router();
const { getAllApplicants } = require('../controllers/applicants');

applicantsRouter.get('/', getAllApplicants);

module.exports = applicantsRouter;
