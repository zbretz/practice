'use strict';

const { remap } = require('../../utils/db-utils');
const { userSchema } = require('../schema/userSchema');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Role }) {
			// define association here
			this.belongsTo(Role, { foreignKey: 'role_id' });
		}
	}
	User.init(remap(DataTypes, userSchema), {
		sequelize,
		modelName: 'User',
		tableName: 'users'
	});
	return User;
};
