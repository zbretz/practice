const { getAllAdmins } = require('../controllers/admins');

const adminsRouter = require('express').Router();

adminsRouter.get('/', getAllAdmins);

module.exports = adminsRouter;
