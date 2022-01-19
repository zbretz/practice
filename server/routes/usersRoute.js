const usersRouter = require('express').Router();
const { getAllUsers, getUserById, getUsersByRole } = require('../controllers/users');

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

usersRouter.get('/role/:role_id', getUsersByRole);

module.exports = usersRouter;
