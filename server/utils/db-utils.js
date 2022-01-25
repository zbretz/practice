const { v4: uuid } = require('uuid');
const createError = require('http-errors');

/*
function: remap
description: remapping the schema depending on if it's used by model or migrations
parameters:
    - inputData: initial schema
    - objectModel:
        - DataType - used for model
        - Sequelize - used for migrations
return:
    - will return the remapped version of the schema
    - will throw error if some of the conditions are not met
*/
function remap(objectModel, inputData) {
	try {
		let outputData = JSON.parse(JSON.stringify(inputData));
		for (let property in outputData) {
			outputData[property].type = objectModel[outputData[property].type];
		}
		return outputData;
	} catch (error) {
		return new Error(error);
	}
}

/*
function: prependUUIDV4
description: prepends id serial number using sequelize uuidv4
parameters:
    - bulkInput: seeding without id's. It should be an array datatype
return:
    - will return a version of the input with serial id's
    - will throw error if some of the conditions are not met
*/
function prependUUIDV4(bulkInput) {
	try {
		return bulkInput.map((input) => ({ ...input, id: uuid() }));
	} catch (error) {
		return new Error(error);
	}
}

const EXCLUDEDATES = ['createdAt', 'updatedAt'];

const ROLES_ID = {
	ADMIN: 1,
	RECRUITER: 2,
	APPLICANT: 3
};

const joinConfig = (model) => {
	return {
		attributes: {
			exclude: [...EXCLUDEDATES, 'id']
		},
		include: {
			model,
			attributes: ['name', 'email'],
			required: true
		},
		raw: true
	};
};

const notFoundError = (type) => {
	return createError(404, `${type} not found!`);
};

const systemError = (error) => {
	return createError(500, error);
};

module.exports = {
	remap,
	prependUUIDV4,
	EXCLUDEDATES,
	ROLES_ID,
	joinConfig,
	notFoundError,
	systemError
};
