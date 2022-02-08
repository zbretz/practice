const { getAllAdmins, getAdminById } = require('../controllers/admins');

const adminsRouter = require('express').Router();

adminsRouter.get('/', getAllAdmins);
adminsRouter.get('/:id', getAdminById);

module.exports = adminsRouter;
