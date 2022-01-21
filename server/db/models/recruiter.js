'use strict';
const { Model } = require('sequelize');

const { remap } = require('../../utils/db-utils');
const { recruiterSchema } = require('../schema/recruiterSchema');

module.exports = (sequelize, DataTypes) => {
	class Recruiter extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ User }) {
			// define association here
			this.belongsTo(User, { foreignKey: 'user_id' });
		}
	}
	Recruiter.init(remap(DataTypes, recruiterSchema), {
		sequelize,
		modelName: 'Recruiter',
		tableName: 'recruiters'
	});
	return Recruiter;
};
