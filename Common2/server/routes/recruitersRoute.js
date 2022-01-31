const recruitersRouter = require('express').Router();
const { getAllRecruiters, getRecruiterById } = require('../controllers/recruiters');
const {fake_user_table, candidates} = require('../dummy_data/applicantsData')

recruitersRouter.get('/all', (req, res) => {
  // res.send(candidates)
});

recruitersRouter.get('/byId', (req, res) => {
  // res.send(fake_user_table[req.query.id])
});

module.exports = recruitersRouter;