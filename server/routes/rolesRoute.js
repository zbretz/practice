const rolesRouter = require('express').Router();
const { getAllRoles, getSingleRole } = require('../controllers/roles');

rolesRouter.get('/', getAllRoles);

rolesRouter.get('/:id', getSingleRole);

module.exports = rolesRouter;
