const interviewsRouter = require('express').Router();

// const { Op } = require('sequelize');
const { User, Applicant, Recruiter, Admin, Interview } = require('../db/models/index');
// const { EXCLUDEDATES, ROLES_ID } = require('../utils/db-utils');
// const { notFoundError, systemError, badRequest } = require('../utils/utils');
// const { v4: uuid } = require('uuid');

const { notFoundError, systemError, remapResponse, remapResponses } = require('../utils/utils');


// const MODELS = {
// 	[ROLES_ID.ADMIN]: Admin,
// 	[ROLES_ID.RECRUITER]: Recruiter,
// 	[ROLES_ID.APPLICANT]: Applicant
// };


interviewsRouter.get('/', async (req, res)=>{

  try {
    const interviews = await Interview.findAll({});
    res.status(200).json(interviews);
  } catch (e) {
    res.send(e)
    // next(systemError(e));
  }

  // res.send('thing')



});

// interviewsRouter.get('/:id', getApplicantById);

module.exports = interviewsRouter;
