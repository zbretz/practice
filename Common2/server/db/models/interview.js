'use strict';
const { Model } = require('sequelize');

const { remap } = require('../../utils/db-utils');
const { interviewSchema } = require('../schema/interviewSchema');

module.exports = (sequelize, DataTypes) => {
	class Interview extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
     static associate({ User, Applicant, Evaluation }) {
			// define association here
			// this.belongsTo(User, { foreignKey: 'user_id' });
			this.belongsTo(Applicant, {
				foreignKey: 'interviewee',
				target: 'user_id',
				onDelete: 'CASCADE'
			});
			this.hasMany(Evaluation,
				{
					foreignKey: 'interview'
				})
		}
	}
	Interview.init(remap(DataTypes, interviewSchema), {
		sequelize,
		modelName: 'Interview',
		tableName: 'interviews'
	});
	return Interview;
};
