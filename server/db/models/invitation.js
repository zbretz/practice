'use strict';
const { Model } = require('sequelize');

const { remap } = require('../../utils/db-utils');
const { invitationSchema } = require('../schema/invitationSchema');

module.exports = (sequelize, DataTypes) => {
	class Invitation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Role, Admin }) {
			// define association here
			this.belongsTo(Admin, {
				foreignKey: 'admin_id',
				target: 'user_id',
				onDelete: 'CASCADE'
			});
			this.belongsTo(Role, { foreignKey: 'for_role', onDelete: 'CASCADE' });
		}
	}
	Invitation.init(remap(DataTypes, invitationSchema), {
		sequelize,
		modelName: 'Invitation',
		tableName: 'invitations'
	});
	return Invitation;
};
