const userSchema = {
	id: {
		type: 'UUID',
		primaryKey: true
	},
	email: {
		type: 'STRING',
		allowNull: false
	},
	password: {
		type: 'STRING',
		allowNull: false
	},
	role_id: {
		type: 'INTEGER',
		allowNull: false,
		references: {
			model: 'roles',
			key: 'id',
			onDelete: 'CASCADE'
		}
	}
};

module.exports = { userSchema };
