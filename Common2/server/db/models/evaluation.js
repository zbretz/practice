'use strict';
const { Model } = require('sequelize');

const { remap } = require('../../utils/db-utils');
const { evaluationSchema } = require('../schema/evaluationSchema');

module.exports = (sequelize, DataTypes) => {
	class Evaluation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
     static associate({ Interview }) {
			// this.belongsTo(Interview, {
			// 	// foreignKey: 'id',
			// 	// target: 'id',
			// 	onDelete: 'CASCADE'
			// });
		}
	}
	Evaluation.init(remap(DataTypes, evaluationSchema), {
		sequelize,
		modelName: 'Evaluation',
		tableName: 'evaluations'
	});
	return Evaluation;
};
