const usersRouter = require('express').Router();
const {
	getAllUsers,
	getUserById,
	getUsersByRole,
	createUser,
	validateRequest,
	checkUserExistence
} = require('../controllers/users');

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

usersRouter.get('/role/:role_id', getUsersByRole);

usersRouter.use('/', validateRequest);
usersRouter.post('/', checkUserExistence, createUser);

module.exports = usersRouter;
