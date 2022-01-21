'use strict';
const { Model } = require('sequelize');

const { remap } = require('../../utils/db-utils');
const { noteSchema } = require('../schema/noteSchema');

module.exports = (sequelize, DataTypes) => {
	class Note extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ User, Applicant }) {
			// define association here
			this.belongsTo(User);
			this.belongsTo(Applicant);
		}
	}
	Note.init(remap(DataTypes, noteSchema), {
		sequelize,
		modelName: 'Note',
		tableName: 'notes'
	});
	return Note;
};
