'use strict';
const { Model } = require('sequelize');

const { remap } = require('../../utils/db-utils');
const { applicantSchema } = require('../schema/applicantSchema');

module.exports = (sequelize, DataTypes) => {
	class Applicant extends Model {
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
	Applicant.init(remap(DataTypes, applicantSchema), {
		sequelize,
		modelName: 'Applicant',
		tableName: 'applicants'
	});
	return Applicant;
};
