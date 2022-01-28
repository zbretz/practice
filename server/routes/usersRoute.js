const usersRouter = require('express').Router();
const {
	getAllUsers,
	getUserById,
	getUsersByRole,
	createUser,
	checkUserExistence
} = require('../controllers/users');

const { validateRequest } = require('../controllers/general-validation');

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

usersRouter.get('/role/:role_id', getUsersByRole);

usersRouter.use(validateRequest, checkUserExistence);
usersRouter.post('/', createUser);

module.exports = usersRouter;
