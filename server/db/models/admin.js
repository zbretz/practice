'use strict';
const { Model } = require('sequelize');

const { remap } = require('../../utils/db-utils');
const { adminSchema } = require('../schema/adminSchema');

module.exports = (sequelize, DataTypes) => {
	class Admin extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ User, Invitation }) {
			// define association here
			this.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
			this.hasMany(Invitation, {
				foreignKey: 'admin_id',
				target: 'user_id',
				onDelete: 'CASCADE'
			});
		}
	}
	Admin.init(remap(DataTypes, adminSchema), {
		sequelize,
		modelName: 'Admin',
		tableName: 'admins'
	});
	return Admin;
};
