const rolesRouter = require('express').Router();
const { getAllRoles } = require('../controllers/roles');

rolesRouter.get('/', getAllRoles);

module.exports = rolesRouter;
