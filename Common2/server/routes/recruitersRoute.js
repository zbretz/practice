const recruitersRouter = require('express').Router();
const { getAllRecruiters, getRecruiterById, update } = require('../controllers/recruiters');

recruitersRouter.get('/', getAllRecruiters);
recruitersRouter.get('/:id', getRecruiterById);

module.exports = recruitersRouter;
