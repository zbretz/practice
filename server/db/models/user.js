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
		static associate({ Role, Admin, Recruiter, Applicant, Note }) {
			// define association here
			this.belongsTo(Role, { foreignKey: 'role_id', target: 'role' });
			this.hasOne(Admin, { foreignKey: 'user_id', onDelete: 'CASCADE' });
			this.hasOne(Recruiter, { foreignKey: 'user_id', onDelete: 'CASCADE' });
			this.hasOne(Applicant, { foreignKey: 'user_id', onDelete: 'CASCADE' });
			this.hasMany(Note, { foreignKey: 'notes_by', target: 'user_id', onDelete: 'CASCADE' });
		}
	}
	User.init(remap(DataTypes, userSchema), {
		sequelize,
		modelName: 'User',
		tableName: 'users'
	});
	return User;
};
