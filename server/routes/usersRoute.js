const usersRouter = require('express').Router();
const { getAllUsers } = require('../controllers/users');

usersRouter.get('/', getAllUsers);

module.exports = usersRouter;
