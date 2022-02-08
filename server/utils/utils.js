const createError = require('http-errors');

function normalizePort(val) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

const remapResponse = (responseObject) => {
	const output = {};
	for (let key in responseObject) {
		const newKey = key.slice(key.indexOf('.') + 1);
		if (newKey !== key) {
			output[newKey] = responseObject[key];
		} else {
			output[key] = responseObject[key];
		}
	}
	return output;
};

const remapResponses = (responseArray) => {
	return responseArray.map((response) => remapResponse(response));
};

const notFoundError = (type) => {
	return type ? createError(404, `${type} not found!`) : createError(404);
};

const systemError = (error) => {
	return error ? createError(500, error) : createError(500);
};

const badRequest = (message) => {
	return message ? createError(400, message) : createError(400);
};

module.exports = {
	normalizePort,
	remapResponse,
	remapResponses,
	notFoundError,
	systemError,
	badRequest
};
