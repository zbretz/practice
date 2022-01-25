'use strict';
const { Model } = require('sequelize');
const { remap } = require('../../utils/db-utils');
const { roleSchema } = require('../schema/roleSchema');

module.exports = (sequelize, DataTypes) => {
	class Role extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ User, Invitation }) {
			// define association here
			this.hasMany(User, { foreignKey: 'role_id', onDelete: 'CASCADE' });
			this.hasMany(Invitation, { foreignKey: 'for_role', onDelete: 'CASCADE' });
		}
	}
	Role.init(remap(DataTypes, roleSchema), {
		sequelize,
		modelName: 'Role',
		tableName: 'roles'
	});
	return Role;
};
