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
	let outputData = JSON.parse(JSON.stringify(inputData));
	for (let property in outputData) {
		outputData[property].type = objectModel[outputData[property].type];
		outputData[property].defaultValue = objectModel[outputData[property].defaultValue];
	}
	return outputData;
}

module.exports = {
	remap
};
