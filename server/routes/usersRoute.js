const usersRouter = require('express').Router();
const {
	getAllUsers,
	getUserById,
	getUsersByRole,
	createUser,
	validatePost
} = require('../controllers/users');

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

usersRouter.get('/role/:role_id', getUsersByRole);

usersRouter.use('/', validatePost);
usersRouter.post('/', createUser);

module.exports = usersRouter;
