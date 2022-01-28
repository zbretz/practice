const usersRouter = require('express').Router();
const { getAllUsers, getUserById, getUsersByRole, createUser } = require('../controllers/users');

const { validateRequest, checkUserExistence } = require('../controllers/general-validation');

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

usersRouter.get('/role/:role_id', getUsersByRole);

usersRouter.use('/', validateRequest);
usersRouter.post('/', createUser);

module.exports = usersRouter;
