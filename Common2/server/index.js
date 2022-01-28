const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { normalizePort } = require('./utils/utils');
const app = express();

// helper middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require('dotenv').config();
const port = normalizePort(process.env.SERVER_PORT || 3001);

app.use(express.static(__dirname + '/../client/public'));

// routes and controllers
const { starter } = require('./controllers/starter');
const rolesRouter = require('./routes/rolesRoute');
const usersRouter = require('./routes/usersRoute');
const adminsRouter = require('./routes/adminsRoute');
const recruitersRouter = require('./routes/recruitersRoute');
const applicantsRouter = require('./routes/applicantsRoute');

app.get('/starter', starter);
app.use('/roles', rolesRouter);
app.use('/users', usersRouter);
app.use('/admins', adminsRouter);
app.use('/recruiters', recruitersRouter);
app.use('/applicants', applicantsRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
	next(createError(404, 'Resource not found!'));
});

app.use(function (err, req, res, _next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500).send(err.message);
});

app.listen(port, () => {
	console.log(`CommonApp listening at http://localhost:${port}`);
	console.log(__dirname);
});
