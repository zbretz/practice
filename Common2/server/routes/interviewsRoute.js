const interviewsRouter = require('express').Router();

// const { Op } = require('sequelize');
const { User, Applicant, Recruiter, Admin, Interview, Evaluation } = require('../db/models/index');
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
  }
  // res.send('thing')

});


interviewsRouter.get('/:id', async (req, res)=>{

  const { id } = req.params;
  console.log(id)

  try {
    const interviews = await Interview.findAll({
      where: {
        interviewee: id
      }
    })
    res.status(200).json(interviews);
  } catch (e) {
    res.send(e)
  }

  // try {
  //   const interviews = await Applicant.findAll({
  //     where: {user_id: "0246c9b0-07c1-46b1-98fd-2fba1b164d71"},
  //     include: [{
  //       model: Interview,
  //       where: {interviewee: "0246c9b0-07c1-46b1-98fd-2fba1b164d71"}
  //     }]
  //   });
  //   res.status(200).json(interviews);
  // } catch (e) {
  //   res.send(e)
  // }

  // res.send('thing')

});


interviewsRouter.get('/1/:id', async (req, res)=>{

  const { id } = req.params;
  console.log(id)

  try {
    const interviews = await Interview.findAll({
      where: {
        interviewee: id
      },
      include: [{
        model: Applicant,
        where: {user_id: id},
        // required: false
        // where: {interviewee: "0246c9b0-07c1-46b1-98fd-2fba1b164d71"}
      }]
    })
    res.status(200).json(interviews);
  } catch (e) {
    res.send(e)
  }

});


interviewsRouter.get('/evaluations/:id', async (req, res)=>{

  const { id } = req.params;
  console.log(id)

  try {
    const evaluations = await Evaluation.findAll({
      where: {
        interview: id
      },
      // include: [{
      //   model: Applicant,
      //   where: {user_id: id},
      // }]
    })
    res.status(200).json(evaluations);
  } catch (e) {
    res.send(e)
  }

});



interviewsRouter.get('/evaluations1/:id', async (req, res)=>{

  const { id } = req.params;
  console.log(id)

  try {
    const evaluations = await Evaluation.findAll({
      // where: {
      //   interview: id
      // },
      include: [{
        model: Interview,
        // where: {id: 1},
      }]
    })
    res.status(200).json(evaluations);
  } catch (e) {
    res.send(e)
  }

});

module.exports = interviewsRouter;
