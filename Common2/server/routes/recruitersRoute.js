const recruitersRouter = require('express').Router();
const { getAllRecruiters, getRecruiterById } = require('../controllers/recruiters');
const {fake_user_table, candidates} = require('../dummy_data/applicantsData')

recruitersRouter.get('/', getAllRecruiters);
recruitersRouter.get('/:id', getRecruiterById);

module.exports = recruitersRouter;