const invitationSchema = {
	id: {
		type: 'UUID',
		primaryKey: true
	},
	admin_id: {
		type: 'UUID',
		allowNull: false,
		references: {
			model: 'admins',
			key: 'user_id',
			onDelete: 'CASCADE'
		}
	},
	for_role: {
		type: 'INTEGER',
		allowNull: false,
		references: {
			model: 'roles',
			key: 'id',
			onDelete: 'CASCADE'
		}
	},
	issued_for: {
		type: 'STRING',
		allowNull: false
	}
};

module.exports = { invitationSchema };
