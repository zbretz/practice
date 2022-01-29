const usersRouter = require('express').Router();
const {
	getAllUsers,
	getUserById,
	getUsersByRole,
	createUser,
	checkUserExistence,
	deactivateUser,
	deleteUser
} = require('../controllers/users');

const { validateRequest } = require('../controllers/general-validation');

usersRouter.get('/', getAllUsers);

usersRouter.get('/:id', getUserById);
usersRouter.get('/:id/deactivate', deactivateUser);

usersRouter.get('/role/:role_id', getUsersByRole);

usersRouter.delete('/:id', deleteUser);

usersRouter.use(validateRequest);
usersRouter.post('/', checkUserExistence, createUser);

module.exports = usersRouter;
