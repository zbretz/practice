const usersRouter = require('express').Router();
const { getAllUsers, getUserById, getUsersByRole, createUser } = require('../controllers/users');

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

usersRouter.get('/role/:role_id', getUsersByRole);

usersRouter.post('/', createUser);

module.exports = usersRouter;
